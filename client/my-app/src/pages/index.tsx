import type { NextPage } from 'next';
import React, { useState } from 'react';
import styles from '../styles/Layout.module.css';
import { http } from '../utils/http';
import { withAuth } from '../utils/withAuth';
import { Layout } from '../components/Layout';
import { NavegacaoCandidato } from '../components/NavegacaoCandidato';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { NavegacaoGestor } from '../components/NavegacaoGestor';
import { TabelaGestor } from '../components/TabelaGestor';
import { ItensTabelaGestor } from '../components/ItensTabelaGestor';

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

  if(props.role == 'Candidato') {
    return (
      <div className="h-100">
        <Layout nome={props.username}>
          <Col sm={3}>
            <NavegacaoCandidato opcao={opcoesCandidato} path={paths}/>
          </Col>
          <Col>
                <h1>{props.role}</h1>
          </Col>
        </Layout>
      </div>
    )
  }

  return (
    <div className="h-100">
      <Layout nome={props.username}>
        <Col sm={3}>
          <NavegacaoGestor items={opcoesGestor} paths={paths}/>
        </Col>
        <Col>
          <Button onClick={async () => {
              const { data } = await http.get('usuarios');
              setCandidatos(data);
            }}
          >
            Listar candidatos
          </Button>
          {candidatos.length &&
            <TabelaGestor>
            {candidatos.map((candidato, index) => {
              console.log(candidato);
              return (
                <ItensTabelaGestor key={index} candidatos={candidato}/>
              )
            })}
            </TabelaGestor>
          }
        </Col>
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