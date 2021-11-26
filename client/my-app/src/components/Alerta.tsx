import React from "react";
import { Alert } from "react-bootstrap";

interface AlertaProps {
    mensagem: string;
    cor: string;
}

export function Alerta(props: AlertaProps) {
    return (
        <Alert variant={props.cor}>
            <strong>{props.mensagem}</strong>
        </Alert>
    )
}