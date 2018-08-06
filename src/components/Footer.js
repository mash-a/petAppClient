import React, { Component } from 'react';
import { 
    Nav,
    NavItem
} from 'reactstrap';
import './ComponentCSS/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Nav className="container">
                    <img src={require('../BB-Logo-awards-for-newletter.jpg')} alt="" className="bbLogo"/>
                    <NavItem>
                        <p>2018 | Brooklyn Bark</p>
                    </NavItem>
                    <NavItem>
                        <a 
                            href="https://twitter.com/BrooklynBark"
                            target='_blank'
                            rel="noopener noreferrer"
                            ><i className="fab fa-twitter-square"></i></a>
                    </NavItem>
                    <NavItem>
                        <a 
                            href="https://www.instagram.com/brooklynbark/"
                            target='_blank'
                            rel="noopener noreferrer"
                            ><i className="fab fa-instagram"></i></a>
                    </NavItem>
                    <NavItem>
                        <a 
                            href="https://www.facebook.com/BrooklynBark/"
                            target='_blank'
                            rel="noopener noreferrer"
                            ><i className="fab fa-facebook-square"></i></a>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default Footer;