import React from "react";
import { Button, Modal, Row, Col, Table } from "react-bootstrap";

interface ModalGestorProps {
    habs: any;
    nome: any
    show: any;
    onHide: any;
}

export function ModalGestor(props: ModalGestorProps) {

    console.log(props.habs);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {props.nome}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Habilidade</th>
                        <th>Descrição</th>
                        <th>Nível</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.habs.titulo}</td>
                            <td>{props.habs.descricao}</td>
                            <td>{props.habs.nivel}</td>
                        </tr>
                    </tbody>  
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    )
}