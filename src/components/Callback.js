import React, { Component } from 'react';
import Auth from "../utils/Auth";

class Callback extends Component {
    
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <div>
                <p>Loading....</p>
            </div>
        )
    }
}

export default Callback;