import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Context from "../contexts/context";
import PercentageCircle from "react-native-percentage-circle";
import CustomButton from "../components/CustomButton";
import { headersStyle, colors, buttonStyle } from "../styles/styles";

const { primaryHeader } = headersStyle;
const { backgroundColor } = colors;
const { primaryButton, quaternaryColor, quinaryColor } = buttonStyle;

export default class ResultScreen extends React.Component {
  state = {
    scoreMessage: "",
    quirkyMessage: "",
    score: 0,
  };

  static contextType = Context;

  componentDidMount() {
    const scoreMessage = `You got ${this.context.currentScore} right out of ${this.context.questionsLength}`;
    // const scoreMessage =
    //   "You got" +
    //   "\n" +
    //   this.context.currentScore +
    //   " right \n" +
    //   "out of" +
    //   "\n" +
    //   this.context.questionsLength;
    const [quirkyMessage, score] = this.getQuirkyMessage();
    this.setState({ scoreMessage, quirkyMessage, score });
  }

  getQuirkyMessage = () => {
    const { quirkyMessages } = ResultScreen.constants;
    const score =
      (this.context.currentScore / this.context.questionsLength) * 100;

    let messages;
    if (score <= 25) {
      messages = quirkyMessages["0-25"];
    } else if (score <= 50) {
      messages = quirkyMessages["26-50"];
    } else if (score <= 75) {
      messages = quirkyMessages["51-75"];
    } else {
      messages = quirkyMessages["76-100"];
    }

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return [randomMessage, score];
  };

  handleIntroScreenRedirect = async () => {
    await this.context.resetContextState();
    this.props.navigation.navigate("IntroScreen");
  };

  render() {
    const { scoreMessage, quirkyMessage, score } = this.state;
    return (
      <View style={[backgroundColor, styles.container]}>
        <Text style={[primaryHeader, styles.headerStyling]}>
          {quirkyMessage}
        </Text>
        <PercentageCircle
          radius={75}
          percent={score}
          color={"#ffffff"}
          innerColor={"#D8C98F"}
          bgcolor={"backgroundColor"}
        >
          <Text style={styles.scoreText}>{scoreMessage}</Text>
        </PercentageCircle>
        <CustomButton
          style={[primaryButton, styles.buttonStyling]}
          textStyle={styles.buttonText}
          title="Play again"
          onPress={this.handleIntroScreenRedirect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  headerStyling: {
    textAlign: "center",
    width: "80%",
    marginBottom: "40px",
  },
  scoreText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Jua",
  },
  buttonStyling: {
    marginTop: "40px",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Jua",
  },
});

ResultScreen.constants = {
  quirkyMessages: {
    "0-25": ["Wha-what were you doing"],
    "26-50": ["Hello"],
    "51-75": ["Nice work smarty pants"],
    "76-100": ["Stop playing this game and get us to Mars already"],
  },
};
