import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import Context from "../contexts/context";

export default class MultipleChoiceQuestion extends React.Component {
  state = {
    options: {
      answer1: 1,
      answer2: 2,
      answer3: 3,
      answer4: 4,
    },
    question: "",
    incorrect_answers: ["", "", ""],
    correct_answer: "",
  };

  static contextType = Context;

  shuffleAnswers(incorrect_ans, correct_ans) {
    let array = [].concat(correct_ans, incorrect_ans);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({
      options: array,
    });
  }

  async checkAnswer(optionNumber) {
    if (this.state.options[optionNumber] === this.state.correct_answer) {
      this.context.addOnePoint();
      console.log("You got the question correct!");
    } else {
      console.log("You got the question wrong :/");
    }
    this.context.goToNextQuestion();
    this.setState({ options: {} });
  }

  checkAnswer1 = () => {
    this.checkAnswer(0);
  };
  checkAnswer2 = () => {
    this.checkAnswer(1);
  };
  checkAnswer3 = () => {
    this.checkAnswer(2);
  };
  checkAnswer4 = () => {
    this.checkAnswer(3);
  };

  async componentDidMount() {
    await this.setState({
      question: this.props.question.question,
      incorrect_answers: this.props.question.incorrect_answers,
      correct_answer: this.props.question.correct_answer,
    });
    await this.shuffleAnswers(
      this.state.correct_answer,
      this.state.incorrect_answers
    );
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.question.question !== this.state.question) {
      await this.setState({
        question: this.props.question.question,
        incorrect_answers: this.props.question.incorrect_answers,
        correct_answer: this.props.question.correct_answer,
      });
      await this.shuffleAnswers(
        this.state.correct_answer,
        this.state.incorrect_answers
      );
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.question}>{this.state.question}</Text>
        <CheckBox
          title={this.state.options[0]}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked0}
          onPress={this.checkAnswer1}
        />
        <CheckBox
          title={this.state.options[1]}
          center
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked1}
          onPress={this.checkAnswer2}
        />
        <CheckBox
          title={this.state.options[2]}
          center
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked2}
          onPress={this.checkAnswer3}
        />
        <CheckBox
          title={this.state.options[3]}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked3}
          onPress={this.checkAnswer4}
        />
        <TouchableOpacity style={styles.selection} onPress={console.log("")}>
          <Text>{this.state.options[0]}</Text>
        </TouchableOpacity>
        <Button
          title="Check Right Answer"
          onPress={() => console.log(this.state.correct_answer)}
        />

        <Button title="Next" onPress={this.onClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
  },
  selection: {
    width: 300,
    height: 40,
    backgroundColor: "#39644f",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
