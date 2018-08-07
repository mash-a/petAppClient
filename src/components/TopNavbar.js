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
                 <div className="container">
                    <NavbarBrand>
                        <img src={require('../bkbarklogoletters.svg')} alt=""/>
                    </NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About Us</NavLink>
                        </NavItem>
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
                    </Nav>
                    </div>
                 </Navbar>
                 
            </div>
        )
    }
}

export default TopNavbar;