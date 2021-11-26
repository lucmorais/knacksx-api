import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from '../styles/Layout.module.css';

interface FormularioGestorProps {
    func: any;
}

export function FormularioGestor(props: FormularioGestorProps) {
    return (
        <Form method="post" onSubmit={props.func}>
            <Form.Group className="mb-3">
                <FloatingLabel label="Digite a habilidade">
                    <Form.Control type="text" id="habilidade" placeholder="Digite a habilidade" />
                </FloatingLabel>
            </Form.Group>
            <Button variant="primary" className="w-100" type="submit">
                Buscar
            </Button>
        </Form>
    )
}