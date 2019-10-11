import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavLink, Container
} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }


    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm">
                    <Container>
                        <NavbarBrand href="/">CityList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/bradtraversy">
                                        Github 1
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        GitHub 2
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="https://github.com/bradtraversy">
                                        Github 3
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        GitHub 4
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;