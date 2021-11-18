import type { NextPage } from 'next';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { HomePageProps } from '../utils/home';
import { http } from '../utils/http';
import { withAuth } from '../utils/withAuth';

const Home: NextPage<HomePageProps> = (props) => {
  return (
    <Container>
      <Navbar className="pb-5 pt-5" bg="dark" variant="dark">
        <Container>
          <h3 className="text-white">Bem vindo(a) {props.username}</h3>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Home;

export const getServerSideProps = withAuth(
  async(ctx: any, cookies: any) => {
    const { data } = await http.get("auth", {
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
    });
    
    return {
      props: data,
    };
  }
);