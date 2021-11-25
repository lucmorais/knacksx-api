import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from '../styles/Layout.module.css';

interface FormularioGestorProps {
    func: any;
}

export function FormularioGestor(props: FormularioGestorProps) {
    return (
        <Form method="post" onSubmit={props.func}>
            <Form.Group className="mb-3">
                <Form.Label>Habilidade</Form.Label>
                <Form.Control id="habilidade" type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Buscar
            </Button>
        </Form>
    )
}