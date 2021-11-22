import styles from '../styles/Habilidade.module.css';
import { NextPage } from "next";
import React, { Context, ContextType, FormEvent, useState } from "react";
import { Button, Col, Form, Row, Nav } from "react-bootstrap";
import { Layout } from "../components/Layout";
import { http } from "../utils/http";
import { withAuth } from "../utils/withAuth";
import { Tabela } from '../components/Tabela';
import { FormularioHabilidade } from '../components/FormularioHabilidade';
import { ItensTabela } from '../components/ItensTabela';

interface HabilidadePageProps {
    username: string
    userId: number,
    cookies: any;
    ctx: any
}

const Habilidade: NextPage<HabilidadePageProps> = (props) => {

    const [habilidades, setHabilidades] = useState([]);
    const [componentTabela, setComponentTabela] = useState(false);
    const [componentFormulario, setComponentFormulario] = useState(true);

    function handleClick() {
        retornaHabilidade();

        if (componentFormulario == false) {
            setComponentFormulario(true);
            setComponentTabela(false);
        }
        else{
            setComponentFormulario(false);
            setComponentTabela(true);
        }
    }

    async function retornaHabilidade() {
        const { data } = await http.get(`/habilidades/all/${props.userId}`);

        setHabilidades(data);
    }

    async function submit(event: FormEvent) {
        event.preventDefault();

        const titulo = (document.querySelector('#titulo') as HTMLInputElement).value;
        const descricao = (document.querySelector('#descricao') as HTMLInputElement).value;
        const nivel = (document.querySelector('#nivel') as HTMLInputElement).value
        
        document.forms[0].reset();

        const { data } = await http.post(`habilidades/${props.userId}`, { titulo, descricao, nivel });
    }

    return (
      <div>
        <Layout nome={props.username}>
            <Row className="mb-5 mt-5">
                <Col>
                    <Button variant="primary" onClick={handleClick}>Adicionar Habilidade</Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={handleClick}>Mostrar Habilidades cadastradas</Button>
                </Col>
            </Row>
            {componentFormulario && <FormularioHabilidade func={submit}/>}
            {componentTabela &&
                <Tabela>
                    {habilidades.map((habilidade, index) => {
                        return (
                            <ItensTabela habs={habilidade}/>
                        )
                    })}
                </Tabela>
            }
        </Layout>
      </div>
    )
}
  
export default Habilidade;
  
export const getServerSideProps = withAuth(
    async(ctx: any, cookies: any, payload: any) => {
        const { data } = await http.get("auth", {
            headers: {
                Authorization: `Bearer ${cookies.token}`,
            },
        });

        return {
            props: data,
        };
    },
    ""
);