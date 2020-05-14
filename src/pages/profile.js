import React, { Component } from 'react';
import CardNews from '../components/cardNews';
import { CardDeck } from 'react-bootstrap';
import { cards } from './cards.store.stub';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="news">
                <h1>Профиль</h1>
                <div className="container-news">
                    <div className="row">
                        {
                            cards.map(i => {
                                return <div className="col-12 .col-sm-8 col-md-6 col-lg-6 col-xl-4" key={i.id + 1}><CardNews item={i}  /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }
}