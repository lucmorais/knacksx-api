import React from "react";
import { Button, Modal } from "react-bootstrap";

interface ModalGestorExperienciaProps {
    exps: any;
    nome: any
    show: any;
    onHide: any;
}

export function ModalGestorExperiencia(props: ModalGestorExperienciaProps) {
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
                <h1>{props.exps.empresa}</h1>
                <h1>{props.exps.area}</h1>
                <h1>{props.exps.atividades}</h1>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    )
}