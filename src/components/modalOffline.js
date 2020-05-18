import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

const modalOffline = (props) => {
    const {show, handleShow} = props;


    return (
        <Modal show={show} onHide={handleShow}>
            <Modal.Header closeButton>
                <Modal.Title>Внимание</Modal.Title>
            </Modal.Header>
            <Modal.Body>Отсутствует соединение с сетью. </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>
                    Ок
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default modalOffline;