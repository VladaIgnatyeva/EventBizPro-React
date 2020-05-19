import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
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
                        {this.props.item.description}
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