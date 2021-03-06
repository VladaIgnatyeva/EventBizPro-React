import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getStore from '../store/configureStore';
import { loggedIn, loggedOut } from '../action/index';
import auth from '../utils/auth'


export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        localStorage.setItem('isLoggedIn', false);
        const store = getStore();
        store.dispatch(loggedOut({ isLoggedInStatus: false }));
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        let someElement = document.getElementById('textErrorSignin');
        const user = {
            login: this.state.login,
            password: this.state.password
        };

        
        //console.log('user', user);
        if (user.password.length > 0 && user.login.length > 0) {
            if (auth(user.login, user.password)) {
                localStorage.setItem('isLoggedIn', true);

                const store = getStore();
                store.dispatch(loggedIn({ isLoggedInStatus: true }));

                //console.log('store login', store.getState().user);
                //console.log('local store login', localStorage.getItem('isLoggedIn'));

                this.props.history.push(`/profile`);
            } else {
                someElement.innerHTML = 'Имя пользователя или пароль введены неверно.';
            }

        } else {
            someElement.innerHTML = "Заполните все поля.";
        }
    }

    render() {
        return (
            <>
                <div className="bgSign">
                    <div className="d-flex justify-content-center ">
                        <div className="bgSignInForm" >
                            <Form onSubmit={this.handleSubmit}>
                                <h1>С возвращением!</h1>
                                <Form.Text id="textErrorSignin" name="error" onChange={this.handleChange}></Form.Text>

                                <Form.Group controlId="formBasiclogin">
                                    <Form.Control type="text" placeholder="Логин" name="login" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Пароль" name="password" onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit" id="login" size="lg" block >
                                        Вход
                                    </Button>
                                    <Button href="/home" variant="light" type="button" size="lg" block>
                                        Отмена
                                    </Button>
                                </Form.Group>

                            </Form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}