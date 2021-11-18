import type { GetServerSideProps, NextPage } from 'next';
import { isTokenExpired } from '../utils/auth';
import { parseCookies } from '../utils/cookies';

const PaginaPrivada: NextPage = () => {
  return (
    <div className="text-center bg-success w-5 mt-5">
        <h1 className="text-white">Bem vindo à Página Privada</h1>
    </div>
  )
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