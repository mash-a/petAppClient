import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler, 
    NavbarBrand,
    Nav, 
    NavItem,
    NavLink,
    Media
} from 'reactstrap';
import TopNavbarStyle from './ComponentCSS/TopNavbarStyle.css'

var logo = (
    <span>
   
    </span>
);

class TopNavbar extends Component {
    render() {
        return (
            <div>
                 <Navbar className="navbar">
                    <NavbarBrand>
                        <img src={require('../bkbarklogoletters.svg')}/>
                    </NavbarBrand>
                 </Navbar>
                 
            </div>
        )
    }
}

export default TopNavbar;