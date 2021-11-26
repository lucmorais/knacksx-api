import type { NextPage } from 'next';
import React, { FormEvent, useEffect, useState } from 'react';
import styles from '../styles/Layout.module.css';
import { http } from '../utils/http';
import { withAuth } from '../utils/withAuth';
import { Layout } from '../components/Layout';
import { TabelaGestor } from '../components/TabelaGestor';
import { ItensTabelaGestor } from '../components/ItensTabelaGestor';
import { FormularioGestor } from '../components/FormularioGestor';
import { ListaPerfil } from '../components/ListaPerfil';
import { ListGroup } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { Alerta } from '../components/Alerta';

interface HomePageProps{
  username: string;
  userId: number;
  role: string;
  email: string;
  telefone: string;
  cookies: any;
}

const Home: NextPage<HomePageProps> = (props) => {
  http.defaults.headers.common['Authorization'] = `Bearer ${props.cookies.token}`;
  
  const [opcoesCandidato] = useState<string[]>(['Home', 'Habilidades', 'Experiencias']);
  const [opcoesGestor] = useState<string[]>(['Home']);
  const [paths] = useState<string[]>(['/', 'habilidade', 'experiencia']);
  const [candidatos, setCandidatos] = useState<any[]>([]);
  const [consultas, setConsulta] = useState<any[]>([]);
  const [tabela, setTabela] = useState(false);
  const [estado, setEstado] = useState(false);
  const [contador, setContador] = useState(0);
  const [dados, setDados] = useState<any>({});
  const [alerta, setAlerta] = useState('');
  const router = useRouter();
  
  useEffect(() => {
    buscarPerfil();
    submitListarTodos();
  }, []);
  
  function logout() {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.reload();
  }

  function mostraAlerta(mensagem: string) {
    setAlerta(mensagem);
    setTimeout(() => {
        setAlerta('');
    }, 3000);
  }

  async function buscarPerfil() {
    const {data} = await http.get(`usuarios/${props.userId}`);
    setDados(data);
  }

  async function submitFiltroTodos(event: FormEvent) {
    event.preventDefault();

    const habilidade = (document.querySelector('#habilidade') as HTMLInputElement).value;

    const {data} = await http.post('usuarios/habilidades/all', { habilidade });

    setContador(data.length);
    setConsulta(data);
    setTabela(true);
    setEstado(false);
  }

  //controller usuario - usuarios/all/habilidades
  async function submitListarTodos() {
    const { data } = await http.get('usuarios/todos');

    setContador(data.length);
    setCandidatos(data);
    setTabela(false);
    setEstado(true);
  }

  //controller usuario - usuarios/habilidades/experiencias
  async function submitListarTodosHabsExps() {
    const { data } = await http.get('usuarios/habilidades/experiencias');

    setContador(data.length);
    setCandidatos(data);
    setTabela(false);
    setEstado(true);
  }

  //controller usuario - usuarios
  async function submitFiltroHabilidade() {
    const { data } = await http.get('usuarios');

    setContador(data.length);
    setCandidatos(data);
    setTabela(false);
    setEstado(true);
  }

  async function submitPerfil(event: FormEvent) {
    event.preventDefault();

    const nome = (document.querySelector('#nome') as HTMLInputElement).value;
    const email = (document.querySelector('#email') as HTMLInputElement).value;
    const telefone = (document.querySelector('#telefone') as HTMLInputElement).value;

    const { data } = await http.put(`usuarios/${props.userId}`, { nome, email, telefone });

    mostraAlerta('Os dados foram atualizados');
  }

  if(props.role == 'Candidato') {
    return (
      <div className="h-100">
        <Layout func={logout} opcao={opcoesCandidato} path={paths}>
          <h1 className={styles.layoutTitulo}>Bem vindo(a) {props.username}</h1>
          {alerta && <Alerta cor={'success'} mensagem={alerta} />}
          <div className={styles.bordaPerfil}>
            <h3 className="text-center pb-3">Perfil</h3>
            <ListaPerfil 
              infs={{nome: dados.nome, email: dados.email, telefone: dados.telefone}}
              func={submitPerfil}
            />
          </div>
        </Layout>
      </div>
    )
  }

  return (
    <div className="h-100">
      <Layout func={logout} opcao={opcoesGestor} path={paths}>
        <h1 className={styles.layoutTitulo}>Bem vindo(a) {props.username}</h1>
        <div className={styles.bordaFormulario}>
          <h4 className="mb-5 text-center">Filtro</h4>
          <FormularioGestor func={submitFiltroTodos}/>
          <ListGroup horizontal className="w-100 mt-3">
            <ListGroup.Item
              variant="dark"
              action
              onClick={submitFiltroHabilidade}  
            >
              Listar candidatos com habilidades cadastradas
            </ListGroup.Item>
            <ListGroup.Item 
              action 
              variant="dark" 
              onClick={submitListarTodosHabsExps}
            >
              Listar candidatos com habilidade e experiencia
            </ListGroup.Item>
            <ListGroup.Item 
              action 
              variant="dark" 
              onClick={submitListarTodos}
            >
              Listar todos candidatos
            </ListGroup.Item>
          </ListGroup>
        </div>
        <h6 className={styles.margemTitulos}>Resultado da pesquisa: {contador}</h6>
        {tabela &&
          <TabelaGestor>
          {consultas.map((consulta, index) => {
            return (
              <ItensTabelaGestor key={index} func={submitListarTodos} candidatos={consulta}/>
            )
          })}
          </TabelaGestor>
        }
        {estado &&
          <TabelaGestor>
          {candidatos.map((candidato, index) => {
            return (
              <ItensTabelaGestor key={index} func={submitListarTodos} candidatos={candidato}/>
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