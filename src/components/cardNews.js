import React, { Component } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import img_default from '../assets/rr.jpeg'


class CardNews extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card id="card">
                <Card.Img variant="top" src={img_default} />
                <Card.Body>
                    <Card.Title>{this.props.item.title}</Card.Title>
                    <Card.Text>
                        {this.props.item.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{this.props.item.footer}</small>
                </Card.Footer>
            </Card >
        )
    }
}

export default CardNews;