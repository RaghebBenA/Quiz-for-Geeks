import React, { Component } from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const color = {
    color: "black",
    padding: "10px"
}
class Header extends Component {

    render() {
        return (
            <Navbar className="nav" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >
                        <NavItem>
                            <NavLink className="navLink" style={color} to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navLink" style={color} to="Cs">
                                <span className="fa fa-question-circle fa-lg"></span> Quiz Demo
                    </NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink className="navLink" style={color} to="/login">
                        <span className="fa fa-sign-in fa-lg "></span>Login
                        </NavLink>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
export default Header