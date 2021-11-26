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
import styles from '../styles/Experiencia.module.css';
import { useRouter } from "next/router";
import { Alerta } from "../components/Alerta";

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
    const [alerta, setAlerta] = useState('');
    const router = useRouter();

    function logout() {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.reload();
    }
    
    function mostraAlerta(mensagem: string) {
        setAlerta(mensagem);
        setTimeout(() => {
            setAlerta('');
        }, 2000);
    }

    async function carregaExperiencias() {
        const {data} = await http.get(`experiencias/all/${props.userId}`);
        
        setHabilidades(data);

        if(!Object.keys(data).length) {
            setComponentTabela(false);
            mostraAlerta('Nenhuma experiencia cadastrada');
        }
        else {
            setComponentTabela(true);
        }
    }

    async function submit(event: FormEvent) {
        event.preventDefault();

        const empresa = (document.querySelector('#empresa') as HTMLInputElement).value;
        const area = (document.querySelector('#area') as HTMLInputElement).value;
        const atividades = (document.querySelector('#atividades') as HTMLInputElement).value
        
        document.forms[0].reset();

        const { data } = await http.post(`experiencias/${props.userId}`, { empresa, area, atividades });
        
        if(data) 
            mostraAlerta('Experiencia adicionada com sucesso');
    }

    if(props.role == 'Candidato') {
        return (
          <div className="h-100">
            <Layout opcao={opcoes} path={paths} func={logout}>
                <h2 className={styles.margemTitulo}>Experiencia</h2>
                <ListGroup horizontal className={styles.listaExperiencia}>
                    <ListGroup.Item
                        action
                        variant="primary" 
                        onClick={() => {
                            setComponentFormulario(true);
                            setComponentTabela(false);
                    }}>Adicionar experiencia</ListGroup.Item>
                    <ListGroup.Item
                        action
                        variant="primary" 
                        onClick={() => {
                            carregaExperiencias();
                            setComponentFormulario(false);
                    }}>Visualizar experiencias</ListGroup.Item>
                </ListGroup>
                {alerta && <Alerta cor={'success'} mensagem={alerta} />}
                {componentFormulario && <FormularioExperiencia func={submit}/>}
                {componentTabela && experiencias &&
                    <Tabela>
                        {experiencias.map((experiencia, index) => {
                            return (
                                <ItensTabelaExperiencia exps={experiencia}>
                                    <td className="align-middle text-center">
                                        <Button onClick={async () => {
                                            const { data } = await http.delete(`experiencias/${props.userId}/u_e/${experiencia.id}`);
                                            
                                            mostraAlerta('A experiencia foi deletada');
                                            
                                            setTimeout(() => {
                                                setAlerta('');
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