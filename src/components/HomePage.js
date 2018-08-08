import React, { Component } from 'react';
import Carousel from './Carousel';
import Reviews from './Reviews';
import { Button, Row, Col } from 'reactstrap'
import './ComponentCSS/HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="homepage">
                    <Row className="container">
                        <Col md="3">
                            <h1 className="header">Your Personalized, Local Pet Care Experience</h1>
                        </Col>
                    </Row>
                </div>
                <div className="container services">
                    <h4 className="servicesHeader">Our Services</h4>
                    <Row>
                    <Col>
                    <ul>
                        <li><i className="fas fa-bed"></i>Sleepovers</li>
                        <p className="subtitles">Overnight Pet Care</p>
                        <li><i className="fas fa-paw"></i>Dog Walks</li>
                        <p className="subtitles">20/30/45/60 minutes for whenever your pup needs a walk.</p>
                        <li><i className="fas fa-child"></i>Baby Watch</li>
                        <p className="subtitles">Pet Care for when a people puppy is occupying parents.</p>
                        <li><i className="fas fa-dove"></i>Pet Sitting</li>
                        <p className="subtitles">Daily visits by a trained Pet CPR/First Aid care giver</p>
                    </ul>
                    </Col>
                    <Col className="consultation">
                        <h5>Set up a Free In-Home Consultation!</h5>
                        <Button>Book Here</Button>
                    </Col>
                    </Row>
                </div>
                <Reviews />
            </div>
        )
    }
}

export default HomePage;