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

    onSubmit(value) {
        return this.props.dispatch(submitAnswer(value));
    }

    render() {
        console.log(this.props.questions);

        return (
            <form className="question" onSubmit={this.props.handleSubmit(value => this.onSubmit(value.answer))}>
                <p className="dothraki">
                    {this.props.questions && this.props.questions.length > 0? this.props.questions[0].question : ''}</p>
                <Field component="input" type="text" name="answer" placeholder="Answer" />
                <br />
                <p className="feedback">{this.props.feedback}</p>
                <button className="submit">Submit</button>
                <button className="next" onClick={() => this.props.dispatch(fetchQuestions())}>Next Question</button>
            </form>
        )
    };
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        questions: state.questions.data,
        feedback: state.questions.feedback
    }
}

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
})(QuestionCard)));

