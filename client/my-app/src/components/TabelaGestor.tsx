import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import { ItensTabela } from "./ItensTabela";

export function TabelaGestor(props: any) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Habilidade</th>
                    <th>Experiencia</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </Table>
    )
}