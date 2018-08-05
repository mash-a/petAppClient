import React, { Component } from 'react';
//import Auth from '../utils/Auth';

class Main extends Component {
    render() {
        return (
            <div className="container">
                {!this.props.auth.isAuthenticated() &&
                <div>
                    <hr />
                    Please login first
                    <hr />
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
                }
            </div>
        )
    }
}

export default Main;