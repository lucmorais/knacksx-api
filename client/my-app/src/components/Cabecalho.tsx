import React from "react";
import { Container, Navbar } from "react-bootstrap";

export function Cabecalho(props: any) {
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand className="text-light">Bem vindo(a) {props.children}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}