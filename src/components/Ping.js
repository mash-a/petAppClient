import React, { Component } from 'react';
import axios from 'axios';

class Ping extends Component {

    constructor() {
        super()
        this.ping = this.ping.bind(this);
        this.securedPing = this.securedPing.bind(this);
    };
    
    componentWillMount() {
        this.setState({message: ''});
    };

    ping() {
        axios.get('http://localhost:3004/api/petApp/public')
            .then(res => this.setState({ message: res.data.message }))
            .catch(err => this.setState({ message: err.message }));
    };

    securedPing() {
        const { getAccessToken } = this.props.auth;
        const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
        axios.get('http://localhost:3004/api/petApp/private', { headers })
            .then(res => this.setState({ message: res.data.message }))
            .catch(err => this.setState({ message: err.message}));
    };
   
    render() {
        const { isAuthenticated } = this.props.auth;
        const { message } = this.state;
        return (
            <div>
                <h1> Make a call </h1>
                {
                    !isAuthenticated() && 
                    <p>Log in to make this call</p>
                }
                <button onClick={this.ping}>Ping</button>
                {
                    isAuthenticated() && 
                    <button onClick={this.securedPing}> Call Private</button>
                }
                <h3>{message}</h3>
                <a href='/profile'>Profile</a>
            </div>
        )
    }
}

export default Ping;