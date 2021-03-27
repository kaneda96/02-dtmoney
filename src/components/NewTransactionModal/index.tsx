import React from "react";
import Modal from 'react-modal';
import { Container } from "./styles";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTrasactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return(
        <Container>
             <Modal 
       isOpen={isOpen} 
       onRequestClose={onRequestClose}
       >
          <h2>Cadastrar trasação</h2>
        </Modal>
        </Container>
    );
}