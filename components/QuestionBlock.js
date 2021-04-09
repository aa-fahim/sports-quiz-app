import React, { Component } from "react";
import { View, Button } from "react-native";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";
import Context from "../contexts/context";

export default class QuestionBlock extends Component {
  static contextType = Context;

  handleResultScreenRedirect = () => {
    this.props.handleResultScreenRedirect();
  };

  render() {
    let questionView;
    const currentQuestion = this.context.questions[
      this.context.currentQuestionIndex
    ];
    console.log(
      this.context.currentQuestionIndex,
      this.context.questionsLength
    );
    if (this.context.currentQuestionIndex >= this.context.questionsLength) {
      this.handleResultScreenRedirect();
    } else {
      if (currentQuestion.type == "multiple") {
        questionView = <MultipleChoiceQuestion question={currentQuestion} />;
      } else if (currentQuestion.type == "boolean") {
        questionView = <TrueFalseQuestion question={currentQuestion} />;
      }
    }

    return <View>{questionView}</View>;
  }
}
