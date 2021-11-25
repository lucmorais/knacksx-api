import { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { FormularioExperiencia } from "../components/FormularioExperiencia";
import { Icones } from "../components/Icones";
import { ItensTabelaExperiencia } from "../components/ItensTabelaExperiencia";
import { Layout } from "../components/Layout";
import { Navegacao } from "../components/Navegacao";
import { Tabela } from "../components/Tabela";
import { http } from "../utils/http";
import { withAuth } from "../utils/withAuth";
import styles from '../styles/SideBar.module.css';

interface ExperienciaPageProps {
    username: string
    userId: number,
    cookies: any;
    role: string;
    ctx: any
}

const Experiencia: NextPage<ExperienciaPageProps> = (props) => {
    http.defaults.headers.common['Authorization'] = `Bearer ${props.cookies.token}`;

    const [experiencias, setHabilidades] = useState<any[]>([]);
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

    async function carregaExperiencias() {
        const {data} = await http.get(`experiencias/all/${props.userId}`);
        
        setHabilidades(data);

        if(!Object.keys(data).length)
            setComponentTabela(false);
        else
            setComponentTabela(true);
    }

    async function submit(event: FormEvent) {
        event.preventDefault();

        const empresa = (document.querySelector('#empresa') as HTMLInputElement).value;
        const area = (document.querySelector('#area') as HTMLInputElement).value;
        const atividades = (document.querySelector('#atividades') as HTMLInputElement).value
        
        document.forms[0].reset();

        await http.post(`experiencias/${props.userId}`, { empresa, area, atividades });
        
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
                    }}>Adicionar Experiencia</ListGroup.Item>
                    <ListGroup.Item
                        action
                        variant="primary" 
                        onClick={() => {
                            carregaExperiencias();
                            setComponentFormulario(false);
                    }}>Visualizar habilidades</ListGroup.Item>
                </ListGroup>
                {componentFormulario && <FormularioExperiencia func={submit}/>}
                {componentTabela && experiencias &&
                    <Tabela>
                        {experiencias.map((experiencia, index) => {
                            return (
                                <ItensTabelaExperiencia exps={experiencia}>
                                    <td>
                                        <Button onClick={async () => {
                                            await http.delete(`experiencias/${props.userId}/u_e/${experiencia.id}`);
                                            setTimeout(() => {
                                                carregaExperiencias();
                                            },2000);
                                        }}><Icones/>
                                        </Button>
                                    </td>
                                </ItensTabelaExperiencia>
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
            <h1>Acesso negado</h1>
        </div>
    )
}
  
export default Experiencia;
  
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