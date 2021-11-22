import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import { ItensTabela } from "./ItensTabela";

export function Tabela(props: any) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Descrição</th>
                    <th>Nivel</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </Table>
    )
}