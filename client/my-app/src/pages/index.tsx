import type { NextPage } from 'next';
import React, { FormEvent, useState } from 'react';
import styles from '../styles/Layout.module.css';
import { http } from '../utils/http';
import { withAuth } from '../utils/withAuth';
import { Layout } from '../components/Layout';
import { Navegacao } from '../components/Navegacao';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { TabelaGestor } from '../components/TabelaGestor';
import { ItensTabelaGestor } from '../components/ItensTabelaGestor';
import { FormularioGestor } from '../components/FormularioGestor';

interface HomePageProps{
  username: string;
  userId: number;
  role: string;
  cookies: any;
  payload: any;
}

const Home: NextPage<HomePageProps> = (props) => {
  http.defaults.headers.common['Authorization'] = `Bearer ${props.cookies.token}`;
  
  const [opcoesCandidato] = useState<string[]>(['Home', 'Habilidades', 'Experiencias']);
  const [opcoesGestor] = useState<string[]>(['Home']);
  const [paths] = useState<string[]>(['/', 'habilidade', 'experiencia']);
  const [candidatos, setCandidatos] = useState<any[]>([]);
  const [consultas, setConsulta] = useState<any[]>([]);
  const [tabela, setTabela] = useState(false);

  function logout() {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.reload();
  }

  async function submit(event: FormEvent) {
    event.preventDefault();

    const habilidade = (document.querySelector('#habilidade') as HTMLInputElement).value;

    const {data} = await http.post('usuarios/habilidades/all', { habilidade });

    setCandidatos(data);
    setTabela(true);
  }

  if(props.role == 'Candidato') {
    return (
      <div className="h-100">
        <Layout nome={props.username} func={logout} opcao={opcoesCandidato} path={paths}>

        </Layout>
      </div>
    )
  }

  return (
    <div className="h-100">
      <Layout nome={props.username} func={logout} opcao={opcoesGestor} path={paths}>
        <div className={styles.bordaFormulario}>
          <FormularioGestor func={submit}/>
          <ListGroup horizontal className="w-50">
            <ListGroup.Item
              variant="dark"
              action
              onClick={async () => {
                const { data } = await http.get('usuarios');
                setCandidatos(data);
                setConsulta([]);
                setTabela(true);
              }}  
            >
              Listar Candidatos
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">Listar usuarios</ListGroup.Item>
          </ListGroup>
        </div>
        {tabela &&
          <TabelaGestor>
          {consultas.map((consulta, index) => {
            return (
              <ItensTabelaGestor key={index} candidatos={consulta}/>
            )
          })}
          </TabelaGestor>
        }
        {tabela &&
          <TabelaGestor>
          {candidatos.map((candidato, index) => {
            console.log(candidato);
            return (
              <ItensTabelaGestor key={index} candidatos={candidato}/>
            )
          })}
          </TabelaGestor>
        }
      </Layout>
    </div>
  )
}

export default Home;

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