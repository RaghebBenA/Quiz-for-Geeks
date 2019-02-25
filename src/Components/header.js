import React from "react"
import { Navbar, Nav, NavLink, NavItem } from "reactstrap"
const Header = () => {
    return (
        <Navbar className="nav" expand="md">
            <div className="container">
                <Nav navbar className="navLink">
                    <NavItem>
                        <NavLink className="nav-llink">
                            <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-llink">
                            <span className="fa fa-question-circle fa-lg"></span> Quiz Demo
                    </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
    )
}
export default Header