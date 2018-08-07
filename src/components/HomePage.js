import React, { Component } from 'react';
import Carousel from './Carousel';
import './ComponentCSS/HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="homepage">
                    <h1 className="header">Your Brooklyn Dog People</h1>
                </div>
                <div className="carousel">
                    <Carousel />
                </div>
                <div className="container services">
                    <ul>
                        <li><i className="fas fa-bed"></i>Sleepovers</li>
                        <li><i className="fas fa-paw"></i>Dog Walks</li>
                        <li><i className="fas fa-child"></i>Baby Watch</li>
                        <li><i className="fas fa-dove"></i>Pet Sitting  </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomePage;