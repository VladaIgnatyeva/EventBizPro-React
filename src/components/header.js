import React, { Component } from 'react';
import { Button, Form, Navbar, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import getStore from '../store/configureStore';
import { loggedOut } from '../action/index';

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

        //console.log('store login', store.getState().user);
        //console.log('local store login', localStorage.getItem('isLoggedIn'));
    }

    IsLoggedPanel() {
        const storeStatus = getStore().getState().user.isLoggedInStatus;
        //console.log('head store', storeStatus);
        //console.log('head store local', localStorage.getItem('isLoggedIn'));
        if (storeStatus && storeStatus != "false") {
            return (            
                <LinkContainer to="/login">
                    <Button variant="outline-info" style={{ marginLeft: 30 + 'px' }} onClick={this.logout.bind(this)}>
                        Выход
                    </Button>
                </LinkContainer> 
            )
        } else {
            return (         
                <LinkContainer to="/login">
                    <Button variant="outline-info" style={{ marginLeft: 30 + 'px' }}>
                        Вход
                    </Button>
                </LinkContainer>    
            )
        }
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
                        {this.IsLoggedPanel()}
                        {
                            //<IsLoggedPanel user={this.state.user}></IsLoggedPanel>
                        }
                        

                    </Navbar.Collapse>
                    </Form>
                </Container>
            </Navbar>
        )

    }
}

export default Header;