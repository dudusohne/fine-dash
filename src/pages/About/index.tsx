import { Header } from '../../components/Header';
import { Layout } from '../../Layout';
import { HomeContent } from '../Home/styles';

export function About() {
  return (
    <Layout>
      <Header />
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <HomeContent>about page</HomeContent>
      </div >
    </Layout>
  );
}
