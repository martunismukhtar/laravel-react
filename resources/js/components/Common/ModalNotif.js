import React, { useState, useEffect } from 'react';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export default function ModalNotif(prop) {
  
    return (
        <Modal show={prop.show} onHide={prop.onHide}>
          <ModalHeader>
            <ModalTitle>Info</ModalTitle>
          </ModalHeader>
          <ModalBody>{prop.message}</ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
    );
}