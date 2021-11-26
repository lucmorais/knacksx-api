import React, { FormEvent, useState } from "react";
import styles from "../styles/FormCadastro.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { http } from "../utils/http";
import router from "next/router";
import { Alerta } from "../components/Alerta";


const PaginaCadastro = () => {
    const [alerta, setAlerta] = useState('');

    function mostraAlerta(mensagem: string) {
        setAlerta(mensagem);
        setTimeout(() => {
            setAlerta('');
        }, 3000);
    }

    async function submit(event: FormEvent) {
        event.preventDefault();

        const nome = (document.querySelector('#nome') as HTMLInputElement).value;
        const email = (document.querySelector('#email') as HTMLInputElement).value;
        const telefone = (document.querySelector('#telefone') as HTMLInputElement).value;
        const tipo = (document.querySelector('#tipo') as HTMLInputElement).value;
        const senha = (document.querySelector('#senha') as HTMLInputElement).value;

        const { data } = await http.post('usuarios', { 
            nome,
            tipo,
            email,
            telefone,
            senha
        });
    
        
        if (data) {
            mostraAlerta('Cadastro efetuado');
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        }
    }

    return (
        <div className={styles.principal}>
            <Container className={styles.container}>
                <Row>
                    {alerta && <Alerta mensagem={alerta} cor={'success'}/>}
                    <h1 className={styles.titulo}>Cadastro de usuário</h1>
                    <Form method="post" onSubmit={submit} className="w-75 mx-auto">
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control id="nome" placeholder="Digite o nome" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" id="email" placeholder="Digite o email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control id="telefone" placeholder="Digite o telefone" />
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
                        
                        <div className="d-flex justify-content-between pt-4">
                            <Button className="d-inline" variant="primary" type="submit">
                                Cadastrar
                            </Button>
                            <Button className="d-inline" variant="danger" onClick={() => router.push('/login')}>
                                Voltar
                            </Button>
                        </div>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default PaginaCadastro;