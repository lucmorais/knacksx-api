import React, { FormEvent } from "react";
import styles from "../styles/FormCadastro.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { http } from "../utils/http";
import router from "next/router";


const PaginaCadastro = () => {
    async function submit(event: FormEvent) {
        event.preventDefault();

        const nome = (document.querySelector('#nome') as HTMLInputElement).value;
        const email = (document.querySelector('#email') as HTMLInputElement).value;
        const tipo = (document.querySelector('#tipo') as HTMLInputElement).value;
        const senha = (document.querySelector('#senha') as HTMLInputElement).value;

        const { data } = await http.post('usuarios', { 
            nome,
            tipo, 
            email,
            senha
        });

        if (data) {
            router.push('/login');
        }
    }

    return (
        <div className={styles.principal}>
            <Container className={styles.container}>
                <Row>
                    <Col>
                        <h1 className={styles.titulo}>Cadastro de usuário</h1>                   
                        <Form method="post" onSubmit={submit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control id="nome" placeholder="Digite o nome" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" id="email" placeholder="Digite o email" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Tipo</Form.Label>
                                <Form.Select id="tipo" aria-label="Tipo de usuário">
                                    <option>Selecione o tipo</option>
                                    <option value="Candidato">Candidato</option>
                                    <option value="Gestor">Gestor</option>
                                </Form.Select>

                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" id="senha" placeholder="Digite a senha" />
                            </Form.Group>
                            
                            <div className="text-center pt-4">
                                <Button className={styles.botao} variant="primary" type="submit">
                                    Cadastrar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaginaCadastro;