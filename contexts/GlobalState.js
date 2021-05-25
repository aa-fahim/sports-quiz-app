import React from "react";
import Context from "./context";

export default class GlobalState extends React.Component {
  state = {
    questions: [],
    currentQuestionIndex: 0,
    questionsLength: 0,
    currentScore: 0,
  };

  setQuestions = (questions) => {
    this.setState({ questions, questionsLength: questions.length });
  };

  addOnePoint = () => {
    const { currentScore } = this.state;
    this.setState({ currentScore: currentScore + 1 });
  };

  goToNextQuestion = () => {
    const { currentQuestionIndex } = this.state;
    this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
  };

  resetContextState = () => {
    this.setState({
      questions: [],
      currentQuestionIndex: 0,
      questionsLength: 0,
      currentScore: 0,
    });
  };

  render() {
    const value = {
      questions: this.state.questions,
      currentQuestionIndex: this.state.currentQuestionIndex,
      currentScore: this.state.currentScore,
      questionsLength: this.state.questionsLength,
      addOnePoint: this.addOnePoint,
      goToNextQuestion: this.goToNextQuestion,
      setQuestions: this.setQuestions,
      resetContextState: this.resetContextState,
    };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
