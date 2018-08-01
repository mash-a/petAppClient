import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav, 
    NavItem,
    NavLink
} from 'reactstrap';
import './ComponentCSS/TopNavbarStyle.css'

class TopNavbar extends Component {
    render() {
        return (
            <div>
                 <Navbar className="navbar">
                    <NavbarBrand>
                        <img src={require('../bkbarklogoletters.svg')} alt=""/>
                    </NavbarBrand>
                    <Nav>
                        <NavItem>
                        {
                            this.props.auth.isAuthenticated() &&
                            <NavLink href="/profile">Profile</NavLink>
                        }
                        {
                            !this.props.auth.isAuthenticated() &&
                            <NavLink href="/main">Login/Sign Up</NavLink>
                        }
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Services</NavLink>
                        </NavItem>
                    </Nav>
                 </Navbar>
                 
            </div>
        )
    }
}

export default TopNavbar;