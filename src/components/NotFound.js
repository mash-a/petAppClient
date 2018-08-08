import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <p>Uh oh! Not Found!</p>
                <hr />
                Jump back to <a href='/'>Home</a>
            </div>
        )
    }
}

export default NotFound;