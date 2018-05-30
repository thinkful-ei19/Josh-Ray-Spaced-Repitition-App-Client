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
        return (
            <form className="question" onSubmit={this.props.handleSubmit(value => this.onSubmit(value.answer))}>
                <p className="dothraki">
                    {this.props.questions}</p>
                <Field component='input' type="text" name="answer" placeholder="Answer" />
                <br />
                <button className="submit">Submit</button>
                <button className="next" onClick={() => this.props.dispatch(fetchQuestions())}>Next Question</button>
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

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'simple'
})(QuestionCard)));