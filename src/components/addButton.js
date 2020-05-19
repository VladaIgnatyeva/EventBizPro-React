import React, { Component, useState } from 'react';
import NewsModal from './newsModal'
import { Offline, Online, Detector } from "react-detect-offline";

function AddButton(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);

    };

    const updateNews = () => {
        props.updateNews();
    }



    return (
        <div className="wrapp-button">
            <button type="button" className="btn btn-dark" onClick={handleShow}>Добавить</button>

            <Offline>
                <NewsModal {...{ show, handleShow}} />
            </Offline>
            <Online>
                <NewsModal {...{ show, handleShow, updateNews }} />
            </Online>
            
        </div>
    );
}

export default AddButton;