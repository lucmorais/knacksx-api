import type { NextPage } from 'next';
import React, { useState } from 'react';
import styles from '../styles/Global.module.css';
import { http } from '../utils/http';
import { withAuth } from '../utils/withAuth';
import { Layout } from '../components/Layout';
import { NavegacaoCandidato } from '../components/NavegacaoCandidato';
import { Col, Row } from 'react-bootstrap';

interface HomePageProps{
  username: string;
  userId: number;
  payload: any;
}

const Home: NextPage<HomePageProps> = (props) => {
  const [opcao] = useState([
    'Visualizar perfil',
    'Adicionar Habilidade',
    'Adicionar Experiencia'
  ]);

  const [path] = useState([
    'perfil',
    'habilidade',
    'experiencia'
  ])

  return (
    <div>
      <Layout nome={props.username}>
        {opcao.map((op, index) => {
          return (
            <Row className="mt-5">
              <Col>
                <NavegacaoCandidato opcao={op} path={path[index]} id={props.userId}></NavegacaoCandidato>
              </Col>
            </Row>
          )
        })}
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