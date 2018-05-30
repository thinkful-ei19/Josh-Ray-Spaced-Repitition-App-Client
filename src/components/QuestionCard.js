import React from 'react';
import { connect } from 'react-redux';
import './QuestionCard.css';
import requiresLogin from './requires-login';
import {fetchQuestions, submitAnswer} from '../actions/questions';

export class QuestionCard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    onSubmit(value) {
        return this.props.dispatch(submitAnswer(value));
    }

    render() {
        return (
            <form className="question" >
                <p className="dothraki">
                    {this.props.questions && this.props.questions[0].question}</p>
                <input type="text" name="answer" placeholder="Answer" />
                <br />
                <button className="submit">Submit</button>
                <button className="next">Next Question</button>
            </form>
        )
    };
}

const mapStateToProps = state => {
    return {
        questions: state.questions.data,
        feedback: state.questions.feedback
    }
}

export default requiresLogin()(connect(mapStateToProps)(QuestionCard));