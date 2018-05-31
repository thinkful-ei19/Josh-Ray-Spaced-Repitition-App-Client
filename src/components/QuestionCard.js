import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { reduxForm, Field } from 'redux-form';
import { fetchQuestions, submitAnswer } from '../actions/questions';

export class QuestionCard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    onSubmit(event) {
        event.preventDefault();
        const answer = document.getElementById("SubmitAnswer").value;
        this.props.dispatch(submitAnswer(answer));
    }

    render() {
        // console.log(this.props.questions);

        return (
            <div className="SubmitAnswer">
                {/* <form className="question" onSubmit={this.props.handleSubmit(value => this.onSubmit(value.answer))}> */}
                <form onSubmit={event => this.onSubmit(event)} className="question-form">
                    <p className="question-message">
                        What is the English equivalent of this Dothraki word?</p>
                    <p className="dothraki">
                        {this.props.questions ? this.props.questions.question : ''}</p>
                    <Field component="input" type="text" name="answer" placeholder="Answer" id="SubmitAnswer" />
                    <br />
                    <div className="feedback">
                        <p className="correct"># of times correct:<br />{this.props.correct}</p>
                        
                        <br />
                        <p className="incorrect"># of times incorrect:<br />{this.props.incorrect}</p>
                    </div>
                    <div className="buttons">
                        <button className="submit">Submit</button>
                        <button className="next" onClick={(event) => {
                            event.preventDefault();
                            this.props.dispatch(fetchQuestions())
                        }}>Next Question</button>
                    </div>
                </form>
            </div>
        )
    };
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        questions: state.questions.data,
        correct: state.questions.correct,
        incorrect: state.questions.incorrect
    }
}

export default requiresLogin()(connect(mapStateToProps)(reduxForm({
    form: 'answerQuestion'
})(QuestionCard)));

