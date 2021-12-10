import React, { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, ListGroup, Row } from "react-bootstrap";

interface ListaPerfilProps {
    infs: any;
    func: any;
}

export function ListaPerfil(props: ListaPerfilProps) {
    const [editar, setEditar] = useState(true);
    return (
        <ListGroup.Item variant="dark">
            <Form method="put" onSubmit={props.func}>
                {Object.keys(props.infs).map((inf, index) => {
                    return (
                        <Form.Group key={index} className="mb-3">
                            <Form.Label>{Object.keys(props.infs)[index].toUpperCase()}</Form.Label>
                            <Form.Control
                                id={Object.keys(props.infs)[index]}
                                defaultValue={props.infs[inf]}
                                maxLength={Object.keys(props.infs)[index] == 'telefone' ? 11 : 30}
                                type="text"
                                disabled={editar}/>
                        </Form.Group>
                    )})
                }
                <Row className="justify-content-between">
                    <Col>
                        <Button variant="success" className="mt-2 w-100" onClick={() => {
                                setEditar(false);
                        }}>Editar</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" className="mt-2 w-100" onClick={() => setEditar(true)}>Salvar</Button>
                    </Col>
                </Row>
            </Form>
        </ListGroup.Item>
    )
}