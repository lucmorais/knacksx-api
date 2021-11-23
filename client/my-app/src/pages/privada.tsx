import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { isTokenExpired } from '../utils/auth';
import { parseCookies } from '../utils/cookies';
import { ProSidebar, MenuItem, SubMenu, Menu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const PaginaPrivada: NextPage = () => {
  return (
		<div>
      <Row>
        <Col>
          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem>Dashboard</MenuItem>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </Menu>
          </ProSidebar>
        </Col>
        <Col><h1>oi</h1></Col>
      </Row>
    </div>
	);
}

export default PaginaPrivada;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const cookies = parseCookies(ctx.req);

  console.log(isTokenExpired(cookies.token));

  if(!cookies.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: {

    }
  }
}