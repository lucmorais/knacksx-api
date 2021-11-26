import React from "react";
import { Table } from "react-bootstrap";

export function Tabela(props: any) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th className="w-25">Titulo</th>
                    <th className="w-25">Descrição</th>
                    <th className="w-25">Nivel</th>
                    <th className="w-25">Ação</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </Table>
    )
}