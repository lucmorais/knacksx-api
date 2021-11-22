import router from "next/router";
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

export function Cabecalho(props: any) {
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand className="text-light">Bem vindo(a) {props.children}</Navbar.Brand>
                <Button variant="outline-primary" onClick={() => router.push('/')}>Inicio</Button>
            </Container>
        </Navbar>
    )
}