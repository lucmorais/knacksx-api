import { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FormularioExperiencia } from "../components/FormularioExperiencia";
import { Icones } from "../components/Icones";
import { ItensTabelaExperiencia } from "../components/ItensTabelaExperiencia";
import { Layout } from "../components/Layout";
import { Tabela } from "../components/Tabela";
import { http } from "../utils/http";
import { withAuth } from "../utils/withAuth";

interface ExperienciaPageProps {
    username: string
    userId: number,
    cookies: any;
    ctx: any
}

const Experiencia: NextPage<ExperienciaPageProps> = (props) => {

    const [experiencias, setHabilidades] = useState<any[]>([]);
    const [componentTabela, setComponentTabela] = useState(false);
    const [componentFormulario, setComponentFormulario] = useState(true);

    async function carregaExperiencias() {
        const {data} = await http.get(`experiencias/all/${props.userId}`);
        
        setHabilidades(data);
    }

    async function submit(event: FormEvent) {
        event.preventDefault();

        const empresa = (document.querySelector('#empresa') as HTMLInputElement).value;
        const area = (document.querySelector('#area') as HTMLInputElement).value;
        const atividades = (document.querySelector('#atividades') as HTMLInputElement).value
        
        document.forms[0].reset();

        await http.post(`experiencias/${props.userId}`, { empresa, area, atividades });
        
    }

    return (
      <div>
        <Layout nome={props.username}>
            <Row className="mb-5 mt-5">
                <Col>
                    <Button variant="primary" onClick={() => {
                        setComponentFormulario(true);
                        setComponentTabela(false);
                    }}>Adicionar Experiencia</Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={() => {
                        carregaExperiencias();
                        setComponentTabela(true);
                        setComponentFormulario(false);
                    }}>Mostrar Experiencias cadastradas</Button>
                </Col>
            </Row>
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
                                        },1000);
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