import React, { Component } from 'react';
import CardNews from '../components/cardNews'
import { Container, CardDeck } from 'react-bootstrap';



export default class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="news">
            
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