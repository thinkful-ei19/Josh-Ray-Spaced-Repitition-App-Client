import React from 'react';
import { connect } from 'react-redux';
import './QuestionCard.css';
import requiresLogin from './requires-login';
import { reduxForm, Field } from 'redux-form';
import {fetchQuestions, submitAnswer} from '../actions/questions';

export class QuestionCard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    onSubmit(event) {
        event.preventDefault();
        const answer = document.getElementById("SubmitAnswer").value;
        // console.log(answer);
        this.props.dispatch(submitAnswer(answer));
    }

    render() {
        // console.log(this.props.questions);

        return (
            <div className="SubmitAnswer">
            {/* <form className="question" onSubmit={this.props.handleSubmit(value => this.onSubmit(value.answer))}> */}
            <form onSubmit={event => this.onSubmit(event)}>
                <p className="dothraki">
                    Question: {this.props.questions ? this.props.questions.question : ''}</p>
                <Field component="input" type="text" name="answer" placeholder="Answer" id="SubmitAnswer" />
                <br />
                <p className="feedback">{this.props.feedback}</p>
                <button className="submit">Submit</button>
                <button className="next" onClick={() => this.props.dispatch(fetchQuestions())}>Next Question</button>
            </form>
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        questions: state.questions.data,
        feedback: state.questions.feedback,
        correct: state.questions.correct
    }
}

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
})(QuestionCard)));

