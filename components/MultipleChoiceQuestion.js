import React from "react";
import { Text, View, StyleSheet } from "react-native";
import QuestionOption from "../components/QuestionOption";
import Context from "../contexts/context";
import { replaceHtmlSpecialChars } from "../util/string.util";

export default class MultipleChoiceQuestion extends React.Component {
  state = {
    options: [],
    highlightOption1: null,
    highlightOption2: null,
    highlightOption3: null,
    highlightOption4: null,
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

  setDefaultHighlightState = () => {
    this.setState({
      highlightOption1: null,
      highlightOption2: null,
      highlightOption3: null,
      highlightOption4: null,
    });
  };

  shuffleAnswers = (incorrect_answer, correct_answer) => {
    let array = [].concat(correct_answer, incorrect_answer);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({
      options: array,
    });
  };

  checkOption1 = () => {
    this.checkAnswer(0, "highlightOption1");
  };
  checkOption2 = () => {
    this.checkAnswer(1, "highlightOption2");
  };
  checkOption3 = () => {
    this.checkAnswer(2, "highlightOption3");
  };
  checkOption4 = () => {
    this.checkAnswer(3, "highlightOption4");
  };

  checkAnswer = (optionNumber, highlightOption) => {
    if (
      this.state.options[optionNumber] === this.props.question.correct_answer
    ) {
      console.log("You got the question correct!");
      this.setState({ [highlightOption]: styles.correctAnswerHighlight });
      const func = () => this.renderNextQuestion(true);
      setTimeout(func, 400);
    } else {
      console.log("You got the question wrong :/");
      const correctAnswerHighlight = this.findCorrectAnswer();
      console.log(correctAnswerHighlight);
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
        <QuestionOption
          title={this.state.options[2]}
          onPress={this.checkOption3}
          highlight={this.state.highlightOption3}
        />
        <QuestionOption
          title={this.state.options[3]}
          onPress={this.checkOption4}
          highlight={this.state.highlightOption4}
        />
        {/* <QuestionOption
          title={`Correct Answer: ${this.props.question.correct_answer}`}
        /> */}
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
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: "auto",
    marginBottom: 20,
    color: "white",
    fontFamily: "Jua",
  },
  selection: {
    width: 300,
    height: 40,
    backgroundColor: "#39644f",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  correctAnswerHighlight: {
    backgroundColor: "green",
  },
  incorrectAnswerHighlight: {
    backgroundColor: "red",
  },
});
