import React from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';

export default class QuestionScreen extends React.Component {
    state = {
        questions: {
            results: [
                {question: ''}
            ]
        }
    }

    componentDidMount() {
        let urlDetails = this.props.route.params
        let url = 'https://opentdb.com/api.php?amount=' + urlDetails.numOfQuestions + '&category=21' +
            (urlDetails.difficulty ? '&difficulty=' + urlDetails.difficulty + '' : '') +
            (urlDetails.typeOfQuestions ? '&type=' + urlDetails.typeOfQuestions + '' : '')
        fetch(url).then(response =>
            response.json().then(data => (
                this.setState({ questions: data })
            ))
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Press'
                    onPress={() => console.log(this.state)}
                />
                <MultipleChoiceQuestion
                    question={this.state.questions.results[0].question}
                    correct_answer={this.state.questions.results[0].correct_answer}
                    incorrect_answers={this.state.questions.results[0].incorrect_answers}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d4d4d',
        alignItems: 'center',
        justifyContent: 'center',
    },
});