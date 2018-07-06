import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout"onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
                <img className="chibi1" src="https://s15.postimg.cc/7q8vqr8y3/chibi_khal.gif" alt="chibi-khal" />
                <h1 className="app-name">Learn Dothraki</h1>
                {logOutButton}
                <img className="chibi2" src="https://s15.postimg.cc/uiwhkel7v/chibi_khaleesi.gif" alt="chibi-khaleesi" />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
