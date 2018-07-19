import React, { Component } from 'react';
import Auth from '../utils/Auth';

class Main extends Component {
    render() {
        const auth = new Auth();
        auth.login();
        return (
            <div>
                <p>This is not a secret area, {this.props.name}</p><br />
                Do you want to see the secret area? <a href='/secret'>Login</a>
            </div>
        )
    }
}

export default Main;