import React from "react";
import { Button, Form } from "react-bootstrap";

interface FormularioExperienciaProps {
    func: any;
}

export function FormularioExperiencia(props: FormularioExperienciaProps) {   
    return (
        <Form method="post" onSubmit={props.func}>
            <Form.Group className="mb-3">
                <Form.Label>Titulo</Form.Label>
                <Form.Control id="empresa" placeholder="Empresa" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descrição</Form.Label>
                <Form.Control id="area" placeholder="Area" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Atividades desenvolvidas</Form.Label>
                <Form.Control id="atividades"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}