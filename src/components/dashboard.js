import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchQuestions } from '../actions/questions';
//import QuestionCard from './QuestionCard';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <form className="question">
                    <p>What is the English equivalent of the Dothraki word:
                    {this.props.questions}?</p>
                    <input type="text" placeholder="Answer" />
                    <br />
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    console.log(state.auth.currentUser.questions);
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        questions: state.auth.currentUser.questions
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));


/*<div className="dashboard-name">Name: {this.props.name}</div>
<div className="dashboard-protected-data">
Protected data: {this.props.protectedData}
</div>*/