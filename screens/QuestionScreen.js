import React from "react";
import { ScrollView, StyleSheet, Button, View } from "react-native";
import QuestionBlock from "../components/QuestionBlock";
import Context from "../contexts/context";

export default class QuestionScreen extends React.Component {
  state = {
    isQuestionsLoaded: false,
  };

  static contextType = Context;

  async componentDidMount() {
    let urlDetails = await this.props.route.params;
    let url =
      (await "https://opentdb.com/api.php?amount=") +
      urlDetails.numOfQuestions +
      "&category=21" +
      (urlDetails.difficulty ? "&difficulty=" + urlDetails.difficulty : "") +
      (urlDetails.typeOfQuestions ? "&type=" + urlDetails.typeOfQuestions : "");

    await fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          this.context.setQuestions(data.results);
        })
        .catch((err) => {
          console.log(err);
          // Have to add error screen here [TODO-001]
        })
    );
    this.setState({ isQuestionsLoaded: true });
  }

  handleResultScreenRedirect = () => {
    this.props.navigation.navigate("ResultScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isQuestionsLoaded ? (
          <QuestionBlock
            currentQuestionIndex={this.context.currentQuestionIndex}
            handleResultScreenRedirect={this.handleResultScreenRedirect}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d4d4d",
    alignItems: "center",
    justifyContent: "center",
  },
});
