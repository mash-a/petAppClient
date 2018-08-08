import React, { Component } from 'react';
import Auth from "../utils/Auth";
import './ComponentCSS/Callback.css';

class Callback extends Component {
    
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <div className="container">
                <p className="loading"></p>
            </div>
        )
    }
}

export default Callback;