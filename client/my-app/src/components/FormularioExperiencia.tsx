import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from '../styles/Experiencia.module.css';

interface FormularioExperienciaProps {
    func: any;
}

export function FormularioExperiencia(props: FormularioExperienciaProps) {   
    return (
        <div className={styles.bordaFormulario}> 
            <h4 className={styles.tituloFormulario}>Adicionar experiencia</h4>  
            <Form method="post" onSubmit={props.func}>
                <Form.Group className="mb-3">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control id="empresa" placeholder="Empresa" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Área</Form.Label>
                    <Form.Control id="area" placeholder="Area" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Atividades desenvolvidas</Form.Label>
                    <Form.Control id="atividades"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Adicionar
                </Button>
            </Form>
        </div>
    )
}