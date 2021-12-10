import router from "next/router";
import styles from "../styles/RecuperaSenha.module.css";
import React, { FormEvent, useState } from "react";
import { Button, Col, Container, Form, Nav, Row, Stack } from "react-bootstrap";
import { http } from "../utils/http";

const RecuperarSenha = () => {
    const [erro, setErro] = useState(false);
    const [invalido, setInvalido] = useState(false);
    const [show, setShow] = useState(true);

   async function submit(event: FormEvent) {
        event.preventDefault();

        const email = (document.querySelector('#email') as HTMLInputElement).value;

        const { data } = await http.post('/recuperar-senha', { email });

        if(data) {
            setShow(false);
        } else {
            setErro(true);
            setTimeout(() => {
                setErro(false);
            }, 5000);
        }
    }

    async function trocaSenha(event: FormEvent) {
        event.preventDefault();

        const codigo = (document.querySelector('#codigo') as HTMLInputElement).value;
        const senha = (document.querySelector('#senha') as HTMLInputElement).value;

        const { data } = await http.put('/usuarios', { codigo, senha });

        if(data) {
            router.push('/login');
        }else {
            setErro(true);
            setTimeout(() => {
                setErro(false);
            }, 5000);
        }
    }

    return (
        <div className={styles.principal}>
            <Container className={styles.container}>
                <Row>
                    <Col className="align-self-center">
                        <h1 className="pb-3 text-center">Recuperar senha</h1>
                        {show ? 
                            <Form method="post" className={styles.alinhamentoForm} onSubmit={submit}>
                                <Form.Group className="mb-3">
                                    {erro && <h5>Email inválido</h5>}
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" id="email" placeholder="Digite o email" />
                                </Form.Group>
                                <Button className="text-center" variant="primary" type="submit">
                                    Enviar código
                                </Button>
                            </Form>:
                            <Form method="post" className={styles.alinhamentoForm} onSubmit={trocaSenha}>
                                {erro && <h5>Código invalido</h5>}
                                <p>Digite o código enviado para o email</p>
                                <Form.Group className="mb-3">
                                    <Form.Label>Código</Form.Label>
                                    <Form.Control type="text" id="codigo" placeholder="Digite o código" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nova senha</Form.Label>
                                    <Form.Control type="password" id="senha" placeholder="Digite a nova senha" />
                                </Form.Group>
                                <Button className="text-center" variant="success" type="submit">
                                    Confirmar
                                </Button>
                            </Form>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default RecuperarSenha;