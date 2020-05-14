import React, { Component } from 'react';
import { Button, Form, Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import getStore from '../store/configureStore';
import { loggedOut } from '../action/index';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    logout() {
        localStorage.setItem('isLoggedIn', false);
        const store = getStore();
        store.dispatch(loggedOut({ isLoggedInStatus: false }));
    }

    IsLoggedPanel() {
        const storeStatus = getStore().getState().user.isLoggedInStatus;

        if (storeStatus && storeStatus != "false") {
            return (
                <LinkContainer to="/login">
                    <Button variant="outline-info" id='btn-sign' onClick={this.logout.bind(this)}>
                        Выход
                    </Button>
                </LinkContainer>
            )
        } else {
            return (
                <LinkContainer to="/login">
                    <Button variant="outline-info" id='btn-sign'>
                        Вход
                    </Button>
                </LinkContainer>
            )
        }
    }

    render() {
        return (
            <div className="navWrapp">

            
            <Navbar collapseOnSelect fixed="top" expand="md" variant="dark">
                <Container >
                    <LinkContainer to="/home">
                        <Navbar.Brand >
                            <div className="header_logo">
                                <div className="eventBizPro">EventBiz<span>Pro</span></div>
                                <div>Организация семинаров</div>
                            </div>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/home">
                                <div className="txt">
                                    На главную
                                </div>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/news">
                                <div className="txt">
                                    Новости
                                </div>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profile">
                                <div className="txt">
                                    Профиль
                                </div>
                            </Nav.Link>
                        </Nav>

                        <Form inline>
                            {this.IsLoggedPanel()}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        )

    }
}

export default Header;