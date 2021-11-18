import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { setCookie } from "../utils/cookies";
import { http } from "../utils/http";

const PaginaLogin = () => {

    const router = useRouter();

    async function submit(event: FormEvent) {
        event.preventDefault();

        const email = (document.querySelector('#email') as HTMLInputElement).value;
        const senha = (document.querySelector('#senha') as HTMLInputElement).value;

        const { data } = await http.post('login', { email, senha });
        setCookie("token", data.access_token);
        router.push('/');
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <Form method="post" onSubmit={submit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" id="email" placeholder="Digite o email" />
                        </Form.Group>
                
                        <Form.Group className="mb-3">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" id="senha" placeholder="Digite a senha" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PaginaLogin;
