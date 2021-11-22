import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import { Cabecalho } from "./Cabecalho";

interface LayoutProps {
    nome: string;
    children: any;
}

export function Layout(props: LayoutProps) {
    return (
        <Container className="pb-5">
            <Cabecalho>{props.nome}</Cabecalho>
            {props.children}
        </Container>
    )
}