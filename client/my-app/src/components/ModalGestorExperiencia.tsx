import React from "react";
import { Button, Modal, Table } from "react-bootstrap";

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
            aria-labelledby="experiencia"
        >
            <Modal.Header>
                <Modal.Title id="experiencia">
                    {props.nome}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Empresa</th>
                        <th>Area/Cargo</th>
                        <th>Atividades</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.exps.empresa}</td>
                            <td>{props.exps.area}</td>
                            <td>{props.exps.atividades}</td>
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