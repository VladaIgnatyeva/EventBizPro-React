import React, { Component, useState } from 'react';
import ModalOffline from './modalOffline'
import { Offline } from "react-detect-offline";

function WrappModalOffline(props) {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <Offline>
            <ModalOffline {...{ show, handleShow }} />
        </Offline>
    );
}

export default WrappModalOffline;