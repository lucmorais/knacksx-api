import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import { ItensTabela } from "./ItensTabela";

export function TabelaGestor(props: any) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th className="w-25">Nome</th>
                    <th className="w-25">Email</th>
                    <th className="w-25">Telefone</th>
                    <th className="w-25">Habilidade</th>
                    <th className="w-25">Experiencia</th>
                    <th className="w-25">Ação</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </Table>
    )
}