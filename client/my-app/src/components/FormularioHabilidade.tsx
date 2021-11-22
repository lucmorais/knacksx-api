import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface FormularioHabilidadeProps {
    func: any;
}

export function FormularioHabilidade(props: FormularioHabilidadeProps) {   
    return (
        <Form method="post" onSubmit={props.func}>
            <Form.Group className="mb-3">
                <Form.Label>Titulo</Form.Label>
                <Form.Control id="titulo" placeholder="Titulo" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descrição</Form.Label>
                <Form.Control id="descricao" placeholder="Descricao" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nível</Form.Label>
                <Form.Select id="nivel" aria-label="Nível da habilidade">
                    <option>Selecione o nível</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Form.Select>

            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
