import router from "next/router";
import styles from '../styles/SideBar.module.css';
import React from "react";
import { Card, Button, ListGroup, Navbar, Nav, Container, Row } from "react-bootstrap";
import 'react-pro-sidebar/dist/css/styles.css';

interface NavegacaoProps {
    opcao: string[];
    path: string[];
    func: any;
}

export function Navegacao(props: NavegacaoProps) {
    return (
        <Navbar bg="dark" variant="dark" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="me-auto">
                {props.opcao.map((op, index) => {
                    return (
                        <Nav.Link
                            key={index} 
                            onClick={() => router.push(`/${props.path[index]}`)}
                        >
                            {op}
                        </Nav.Link>
                    )
                })}
                </Nav>
                <Button onClick={props.func} variant="outline-light">Logout</Button>
            </Container>
        </Navbar>
    )
}