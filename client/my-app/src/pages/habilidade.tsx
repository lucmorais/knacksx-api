import { NextPage } from "next";
import React, { Context, ContextType, FormEvent, useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row, Nav, ListGroup } from "react-bootstrap";
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

    function logout() {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.location.reload();
    }

    async function carregaHabilidades() {
        const {data} = await http.get(`habilidades/all/${props.userId}`);
        
        setHabilidades(data);

        if(!Object.keys(data).length)
            setComponentTabela(false);
        else
            setComponentTabela(true);
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
            <Layout nome={props.username} opcao={opcoes} path={paths} func={logout}>
                <ListGroup horizontal className="mb-5">
                    <ListGroup.Item
                        action
                        variant="primary" 
                        onClick={() => {
                            setComponentFormulario(true);
                            setComponentTabela(false);
                    }}>Adicionar Habilidade</ListGroup.Item>
                    <ListGroup.Item
                        action
                        variant="primary" 
                        onClick={() => {
                            carregaHabilidades();
                            setComponentFormulario(false);
                    }}>Visualizar habilidades</ListGroup.Item>
                </ListGroup>
            
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
                                            }, 1000);
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