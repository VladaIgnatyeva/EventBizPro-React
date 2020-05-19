import React from "react";
import { Modal, Button, Card, Container, Form, } from "react-bootstrap";
import Wrapper from '../utils/wrapperAxios';
//import {init, list, addNews, clearNews} from '../utils/indexeddb'
import { addNews } from '../utils/indexeddb'

const NewsModal = (props) => {
    const { show, handleShow, updateNews } = props;

    let parametrs = {};

    const addNews = () => {
        let someElement = document.getElementById("textErrorModal");

        if (parametrs.title === '' || parametrs.description === '') {
            someElement.innerHTML = 'Заполните все поля со *';
        } else {
            //console.log("paramentrs ", parametrs);
            const newNews = {
                title: parametrs.title,
                description: parametrs.description
            }
            //console.log("newCollection ", newCollection);

            const wrapp = new Wrapper();
            wrapp.post('news', newNews)
                .then(res => {
                    //console.log("response ", res.data);
                    handleShow();
                    updateNews();
                })
                .catch(err => {
                    handleShow();
                    // someElement.innerHTML = err;
                })

        }
    }

    function handleChange(event) {
        parametrs[event.target.name] = event.target.value
        //console.log(parametrs);
    }

    //console.log("paramentrs ", parametrs);
    return (
        <>
            <Modal show={show} onHide={handleShow} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title >Добавить новую новость</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Text id="textErrorModal" > </Form.Text>
                    <Container>
                        <Form.Group >
                            <Form.Label>Заголовок:*</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                onChange={(e) => handleChange(e)}
                                defaultValue={parametrs.title}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Описание:*</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="description"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={() => addNews()}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
};

export default NewsModal

