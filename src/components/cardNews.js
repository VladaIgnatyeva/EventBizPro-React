import React, { Component } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import img_default from '../assets/rr.jpeg'


class CardNews extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card >
                <Card.Img variant="top" src={img_default} />

                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card >
        )
    }
}

export default CardNews;