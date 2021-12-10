import router from "next/router";
import styles from "../styles/FormLogin.module.css";
import React, { FormEvent } from "react";
import { Button, Col, Container, Form, Nav, Row, Stack } from "react-bootstrap";
import { setCookie } from "../utils/cookies";
import { http } from "../utils/http";

const PaginaLogin = () => {
   async function submit(event: FormEvent) {
        event.preventDefault();

        const email = (document.querySelector('#email') as HTMLInputElement).value;
        const senha = (document.querySelector('#senha') as HTMLInputElement).value;

        const { data } = await http.post('login', { email, senha });
        setCookie("token", data.access_token);
        router.push('/');
    }

    return (
        <div className={styles.principal}>
            <Container className={styles.container}>
                <Row className="align-items-center">
                    <Col sm={7}>
                        <h1 className="pb-3">Login</h1>
                        <Form method="post" onSubmit={submit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" id="email" placeholder="Digite o email" />
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" id="senha" placeholder="Digite a senha" />
                            </Form.Group>
                            <Row className="justify-content-between">
                                <Col>
                                    <Button className="text-center" variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Col>
                                <Col>
                                    <Nav  activeKey="/recuperar-senha">
                                        <Nav.Item className={styles.containerLinks}>
                                            <Nav.Link className={styles.link} href="/recuperar-senha">Esqueci minha senha</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={5}>
                        <div className={styles.conteudo}>
                            <h2>Ainda não tem conta?</h2>
                            <Button
                                className={styles.botaoCadastro}
                                variant="primary" 
                                type="button" 
                                onClick={() => router.push('/cadastro')}>
                                    Cadastre-se
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default PaginaLogin;
