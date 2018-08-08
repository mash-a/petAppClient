import React, { Component } from 'react';
//import Auth from '../utils/Auth';
import './ComponentCSS/Main.css'

class Main extends Component {
    render() {
        return (
            <div className="container login">
                {!this.props.auth.isAuthenticated() &&
                <div>
                    <hr />
                    Login or sign up to create a profile for yourself and your pet/s.
                    <hr />
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
                }
            </div>
        )
    }
}

export default Main;