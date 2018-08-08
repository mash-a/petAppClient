import React, { Component } from 'react';
import { 
    Nav,
    NavItem,
    Row,
    Col
} from 'reactstrap';
import './ComponentCSS/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                <Row>
                    <img src={require('../BB-Logo-awards-for-newletter.jpg')} alt="" className="bbLogo"/>
                </Row>
                <Row className="social">
                    <a 
                        href="https://twitter.com/BrooklynBark"
                        target='_blank'
                        rel="noopener noreferrer"
                        ><i className="fab fa-twitter-square"></i></a>
                                 
                        <a 
                            href="https://www.instagram.com/brooklynbark/"
                            target='_blank'
                            rel="noopener noreferrer"
                            ><i className="fab fa-instagram"></i></a>
                        <a 
                            href="https://www.facebook.com/BrooklynBark/"
                            target='_blank'
                            rel="noopener noreferrer"
                            ><i className="fab fa-facebook-square"></i></a>
                    </Row>
                    <hr />
                    <Row className="copyright">
                        <p>2018 | Brooklyn Bark</p>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Footer;