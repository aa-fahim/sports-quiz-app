import React from "react";
import { Text, View, StyleSheet } from "react-native";
import QuestionOption from "./QuestionOption";
import Context from "../contexts/context";
import { replaceHtmlSpecialChars } from "../util/string.util";

export default class TrueFalseQuestion extends React.Component {
  state = {
    options: [],
    highlightOption1: null,
    highlightOption2: null,
  };

  static contextType = Context;

  componentDidMount() {
    this.shuffleAnswers(
      this.props.question.incorrect_answers,
      this.props.question.correct_answer
    );
  }

  componentWillReceiveProps(nextProps) {
    this.shuffleAnswers(
      nextProps.question.incorrect_answers,
      nextProps.question.correct_answer
    );
  }

  shuffleAnswers = (incorrect_ans, correct_ans) => {
    let array = [].concat(correct_ans, incorrect_ans);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({
      options: array,
    });
  };

  checkOption1 = () => {
    this.checkAnswer(1, "highlightOption1");
  };
  checkOption2 = () => {
    this.checkAnswer(2, "highlightOption2");
  };

  checkAnswer = (optionNumber, highlightOption) => {
    if (
      this.state.options[optionNumber] == this.props.question.correct_answer
    ) {
      console.log("Right Answer!");
      this.setState({ [highlightOption]: styles.correctAnswerHighlight });
      const func = () => this.renderNextQuestion(true);
      setTimeout(func, 400);
    } else {
      console.log("wrong answer");
      const correctAnswerHighlight = this.findCorrectAnswer();
      this.setState({
        [highlightOption]: styles.incorrectAnswerHighlight,
        [correctAnswerHighlight]: styles.correctAnswerHighlight,
      });
      setTimeout(this.renderNextQuestion, 400);
    }
  };

  findCorrectAnswer = () => {
    const { options } = this.state;

    let correctAnswer;
    options.forEach((element, index) => {
      if (element === this.props.question.correct_answer) {
        correctAnswer = index;
      }
    });
    correctAnswer += 1;

    return `highlightOption${correctAnswer}`;
  };

  renderNextQuestion = (shouldAddPoint = false) => {
    if (shouldAddPoint) {
      this.context.addOnePoint();
    }

    this.setDefaultHighlightState();
    this.context.goToNextQuestion();
  };

  setDefaultHighlightState = () => {
    this.setState({
      highlightOption1: null,
      highlightOption2: null,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          {replaceHtmlSpecialChars(this.props.question.question)}
        </Text>
        <QuestionOption
          title={this.state.options[0]}
          onPress={this.checkOption1}
          highlight={this.state.highlightOption1}
        />
        <QuestionOption
          title={this.state.options[1]}
          onPress={this.checkOption2}
          highlight={this.state.highlightOption2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "70%",
  },
  question: {
    fontSize: 20,
    width: "70%",
    textAlign: "center",
    marginHorizontal: "auto",
    marginBottom: 20,
    color: "white",
    fontFamily: "Jua",
  },
  correctAnswerHighlight: {
    backgroundColor: "green",
  },
  incorrectAnswerHighlight: {
    backgroundColor: "red",
  },
});
