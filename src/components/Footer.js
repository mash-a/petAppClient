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
                    <NavItem className="copyright">
                        <p className="text">2018 | Brooklyn Bark</p>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default Footer;