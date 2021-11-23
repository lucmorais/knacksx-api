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
import { NavegacaoCandidato } from '../components/NavegacaoCandidato';

interface HabilidadePageProps {
    username: string
    userId: number,
    role: string;
    cookies: any;
    ctx: any
}

const Habilidade: NextPage<HabilidadePageProps> = (props) => {

    http.defaults.headers.common['Authorization'] = `Bearer ${props.cookies.token}`;

    const [habilidades, setHabilidades] = useState<any[]>([]);
    const [componentTabela, setComponentTabela] = useState(false);
    const [componentFormulario, setComponentFormulario] = useState(true);
    const [opcoes] = useState<string[]>([
        'Home',
        'Habilidades',
        'Experiencias'
      ]);
    
    const [paths] = useState<string[]>([
        '/',
        'habilidade',
        'experiencia'
    ]);

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

    if(props.role == 'Candidato') {
        return (
          <div className="h-100">
            <Layout nome={props.username}>
                <Col className="border border-danger">
                    <NavegacaoCandidato opcao={opcoes} path={paths}/>
                </Col>
                <Col className="mb-5 mt-5 border border-warning" md={9}>
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
                                                },2000);
                                            }}><Icones/>
                                            </Button>
                                        </td>
                                    </ItensTabela>
                                )
                            })}
                        </Tabela>
                    }
                </Col>
            </Layout>
          </div>
        )
    }
    return (
        <div>
            <h1>
                Acesso negado
            </h1>
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