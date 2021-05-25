import React, { Component } from "react";
import { View } from "react-native";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";
import Context from "../contexts/context";

export default class QuestionContainer extends Component {
  static contextType = Context;

  handleResultScreenRedirect = () => {
    this.props.handleResultScreenRedirect();
  };

  render() {
    let questionView;
    const currentQuestion = this.context.questions[
      this.context.currentQuestionIndex
    ];

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
