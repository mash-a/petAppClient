import React, { Component } from 'react';
import { 
    Nav,
    NavItem
} from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div>
            <img src={require('../BB-Logo-awards-for-newletter.svg')} alt=""/>
                <Nav className="container">
                    
                
                    <NavItem className="text-center">
                    <p>2018 | Brooklyn Bark</p>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default Footer;