import React, { Component } from 'react';
import { Button, ButtonGroup, Table, Form, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function IsLoggedPanel(props) {
    if (props.user.isLoggedInStatus && props.user.isLoggedInStatus != "false") {
        return (
            <Form inline >
            
            <LinkContainer to="/login">
                <Button variant="outline-info" style={{ marginLeft: 30 + 'px' }}>
                    Выход
                </Button>
            </LinkContainer>
            </Form>
        )
    } else {
        return (
            <Form inline>
            <LinkContainer to="/login">
                <Button variant="outline-info" style={{ marginLeft: 30 + 'px' }}>
                    Вход
                </Button>
            </LinkContainer>
            </Form>
        )
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    logout() {
        localStorage.setItem('isLoggedIn', false);
    }

    render() {

        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/home">
                        <div className="header_logo">
                            <div className="eventBizPro">EventBiz<span>Pro</span></div>
                            <div>Организация семинаров</div>
                        </div>
                    </LinkContainer>
                    <Form inline>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <LinkContainer to="/home">
                            <Navbar.Brand >
                                На главную
                            </Navbar.Brand>
                        </LinkContainer>
                        <LinkContainer to="/news">
                            <Navbar.Brand >
                                Новости
                        </Navbar.Brand>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <Navbar.Brand >
                                Профиль
                            </Navbar.Brand>
                        </LinkContainer>
                        <IsLoggedPanel user={this.state.user}></IsLoggedPanel>

                    </Navbar.Collapse>
                    </Form>
                </Container>
            </Navbar>
        )

    }
}

export default Header;