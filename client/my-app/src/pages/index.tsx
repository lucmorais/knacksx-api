import type { NextPage } from 'next';
import React, { useState } from 'react';
import styles from '../styles/Layout.module.css';
import { http } from '../utils/http';
import { withAuth } from '../utils/withAuth';
import { Layout } from '../components/Layout';
import { NavegacaoCandidato } from '../components/NavegacaoCandidato';
import { Col, ListGroup, Row } from 'react-bootstrap';

interface HomePageProps{
  username: string;
  userId: number;
  role: string;
  payload: any;
}

const Home: NextPage<HomePageProps> = (props) => {
  const [opcoes] = useState<string[]>(['Home', 'Habilidades', 'Experiencias']);
  const [paths] = useState<string[]>(['/', 'habilidade', 'experiencia']);

  if(props.role == 'Candidato') {
    return (
      <div className="h-100">
        <Layout nome={props.username}>
          <Col sm={3}>
            <NavegacaoCandidato opcao={opcoes} path={paths}/>
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
          <NavegacaoCandidato opcao={opcoes} path={paths}/>
        </Col>
        <Col>
              <h1>{props.role}</h1>
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