import React, { Component } from 'react';
//import Auth from '../utils/Auth';
import './ComponentCSS/Main.css'
import { Button, Row } from 'reactstrap';

class Main extends Component {
    render() {
        return (
            <div className="container login">
                {!this.props.auth.isAuthenticated() &&
                <div>
                    <Row>
                        Login or sign up to create a profile for yourself and your pet/s.
                    </Row>
                    <Row className="loginBtn">
                        <Button onClick={this.props.auth.login}>Login/SignUp</Button>
                    </Row>
                </div>
                }
            </div>
        )
    }
}

export default Main;