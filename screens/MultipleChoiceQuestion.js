import React from 'react';
import { Text, View, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class MultipleChoiceQuestion extends React.Component {

    state = {
        answers: {
            answer1: 1,
            answer2: 2,
            answer3: 3,
            answer4: 4,
        },
        question: 'What is this',
        incorrect_answers: [
            'Vlad',
            'Fahim',
            'Warren',
        ],
        correct_answer: 'Ashif',
    }

    shuffleAnswers(incorrect_ans, correct_ans) {
        let array = [].concat(correct_ans, incorrect_ans)
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.setState({
            answers: array
        })
    }

    async checkOption1() {
        await this.setState({
            checked1: true,
            checkedAnswer: this.state.answers[0]
        })
        this.checkAnswer()
    }

    async checkOption2() {
        await this.setState({
            checked2: true,
            checkedAnswer: this.state.answers[1]
        })
        this.checkAnswer()
    }

    async checkOption3() {
        await this.setState({
            checked3: true,
            checkedAnswer: this.state.answers[2]
        })
        this.checkAnswer()
    }

    async checkOption4() {
        await this.setState({
            checked4: true,
            checkedAnswer: this.state.answers[3]
        })
        this.checkAnswer()
    }

    checkAnswer() {
        if (this.state.checkedAnswer == this.state.correct_answer){
            console.log('Right Answer!')
        }
    }

    async componentDidMount() {
        await this.setState({
            question: this.props.question,
            incorrect_answers: this.props.correct_answer,
            correct_answer: this.props.incorrect_answer,
        })
        await this.shuffleAnswers(this.state.correct_answer, this.state.incorrect_answers)
    }

    render() {

        return (
            <View>
                <Text>
                    {this.state.question}
                </Text>
                <CheckBox
                    title={this.state.answers[0]}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked1}
                    onPress={() => this.checkOption1()}
                />
                <CheckBox
                    title={this.state.answers[1]}
                    center
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked2}
                    onPress={() => this.checkOption2()}
                />
                <CheckBox
                    title={this.state.answers[2]}
                    center
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked3}
                    onPress={() => this.checkOption3()}
                />
                <CheckBox
                    title={this.state.answers[3]}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked4}
                    onPress={() => this.checkOption4()}
                />
                <Button 
                    title='press'
                    onPress = {() => console.log(this.state)}
                />

            </View>
        )
    }
}