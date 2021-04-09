import React from "react";
import { Text, View, Button } from "react-native";
import { CheckBox } from "react-native-elements";

export default class TrueFalseQuestion extends React.Component {
  state = {
    question: "What is this",
    incorrect_answers: "False",
    correct_answer: "True",
  };

  async checkOption1() {
    await this.setState({
      checked1: true,
      checkedAnswer: "True",
    });
    this.checkAnswer();
  }

  async checkOption2() {
    await this.setState({
      checked2: true,
      checkedAnswer: "False",
    });
    this.checkAnswer();
  }

  checkAnswer() {
    if (this.state.checkedAnswer == this.state.correct_answer) {
      console.log("Right Answer!");
    }
  }

  componentDidMount() {
    this.setState({
      question: this.props.question,
      incorrect_answers: this.props.correct_answer,
      correct_answer: this.props.incorrect_answer,
    });
  }

  render() {
    //let questionData = this.props.route.params

    let questionData = {
      question: "What is this",
      incorrect_answers: "False",
      correct_answer: "True",
    };

    return (
      <View>
        <Text>{questionData.question}</Text>
        <CheckBox
          title="True"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked1}
          onPress={() => this.checkOption1()}
        />
        <CheckBox
          title="False"
          center
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.checked2}
          onPress={() => this.checkOption2()}
        />
        <Button title="Next" onPress={this.props.onClick} />
      </View>
    );
  }
}
