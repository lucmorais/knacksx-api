import styles from '../styles/Habilidade.module.css';
import { NextPage } from "next";
import React, { Context, ContextType, FormEvent, useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row, Nav } from "react-bootstrap";
import { Layout } from "../components/Layout";
import { http } from "../utils/http";
import { withAuth } from "../utils/withAuth";
import { Tabela } from '../components/Tabela';
import { FormularioHabilidade } from '../components/FormularioHabilidade';
import { ItensTabela } from '../components/ItensTabela';
import { Icones } from '../components/Icones';

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

    async function carregaHabilidades() {
        const {data} = await http.get(`habilidades/all/${props.userId}`);
        
        setHabilidades(data);
    }

    async function submit(event: FormEvent) {
        event.preventDefault();

        const titulo = (document.querySelector('#titulo') as HTMLInputElement).value;
        const descricao = (document.querySelector('#descricao') as HTMLInputElement).value;
        const nivel = (document.querySelector('#nivel') as HTMLInputElement).value
        
        document.forms[0].reset();

        await http.post(`habilidades/${props.userId}`, { titulo, descricao, nivel });
        
    }

    return (
      <div>
        <Layout nome={props.username}>
            <Row className="mb-5 mt-5">
                <Col>
                    <Button variant="primary" onClick={() => {
                        setComponentFormulario(true);
                        setComponentTabela(false);
                    }}>Adicionar Habilidade</Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={() => {
                        carregaHabilidades();
                        setComponentTabela(true);
                        setComponentFormulario(false);
                    }}>Mostrar Habilidades cadastradas</Button>
                </Col>
            </Row>
            {componentFormulario && <FormularioHabilidade func={submit}/>}
            {componentTabela && habilidades &&
                <Tabela>
                    {habilidades.map((habilidade, index) => {
                        return (
                            <ItensTabela habs={habilidade}>
                                <td>
                                    <Button onClick={async () => {
                                        await http.delete(`habilidades/${props.userId}/u_h/${habilidade.id}`);
                                        setTimeout(() => {
                                            carregaHabilidades();
                                        },1000);
                                    }}><Icones/>
                                    </Button>
                                </td>
                            </ItensTabela>
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
    "login"
);