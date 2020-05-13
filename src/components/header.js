import React, { Component } from 'react';
import { Button, Form, Navbar, Container } from 'react-bootstrap';
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
            <div className='header'>
                <div>
                    <LinkContainer to="/home">
                        <div className="header_logo">
                            <div className="eventBizPro">EventBiz<span>Pro</span></div>
                            <div>Организация семинаров</div>
                        </div>
                    </LinkContainer>
                </div>
                <div className='header-div'>
                    <nav>
                        <div className="topnav" id="myTopnav">

                            <LinkContainer to="/home">
                                <div>
                                    На главную
                                </div>
                            </LinkContainer>
                            <LinkContainer to="/news">
                                <div>
                                    Новости
                                </div>
                            </LinkContainer>
                            <LinkContainer to="/profile">
                                <div>
                                    Профиль
                                </div>
                            </LinkContainer>
                            
                        </div>
                    </nav>
                </div>
                {this.IsLoggedPanel()}
            </div>
        )

    }
}

export default Header;