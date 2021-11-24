import React from "react";
import { Button, Modal } from "react-bootstrap";

interface ModalGestorProps {
    habs: any;
    nome: any
    show: any;
    onHide: any;
}

export function ModalGestor(props: ModalGestorProps) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {props.nome}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>{props.habs.titulo}</h1>
                <h1>{props.habs.descricao}</h1>
                <h1>{props.habs.nivel}</h1>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    )
}