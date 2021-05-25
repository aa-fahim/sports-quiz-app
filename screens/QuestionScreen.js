import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  ImageBackground,
} from "react-native";
import QuestionContainer from "../components/QuestionContainer";
import Context from "../contexts/context";
import { colors } from "../styles/styles";

const { backgroundColor } = colors;

const backgroundImage = require("../assets/background.jpg");

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

    // let url = "https://opentdb.com/api.php?amount=10&category=21"; // for debugging purposes only
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
      <ImageBackground source={backgroundImage} style={[styles.container]}>
        {this.state.isQuestionsLoaded ? (
          <QuestionContainer
            currentQuestionIndex={this.context.currentQuestionIndex}
            handleResultScreenRedirect={this.handleResultScreenRedirect}
          />
        ) : null}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
