import React, { Component } from 'react';
import Carousel from './Carousel';
import './ComponentCSS/HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="homepage">
                    <h1>Your Brooklyn Dog People</h1>
                </div>
                <Carousel />
            </div>
        )
    }
}

export default HomePage;