import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './FootBar.css';

export class FootBar extends Component {
    static displayName = FootBar.name;

    constructor(props) {
        super(props);

        this.toggleFooter = this.toggleFooter.bind(this);
        this.state = {
            collapsed: true
        }
    }

    toggleFooter() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <footer>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-top box-shadow mb-3" light>
                    <Container>
                    <NavbarBrand tag={Link} to="/">Ormi</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Profile">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Tasks">Tasks</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Timeline">Timeline</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                    </Container>
                </Navbar>
            </footer>
            )
    }
}