import React, { Component } from 'react';
import CardNews from '../components/cardNews';
import { CardDeck } from 'react-bootstrap';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="news">
                <h1>Профиль</h1>
                <div className='container-news'>
                    <CardDeck>
                        <CardNews />
                        <CardNews />
                        <CardNews />
                    </CardDeck>
                </div>
            </div>
        )

    }
}