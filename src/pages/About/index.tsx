import { Header } from '../../components/Header';
import { AboutBox, AboutContainer } from './styles';

export function About() {
  return (
    <AboutContainer>
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
      <AboutBox>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus similique excepturi in deserunt ad. Facere doloribus officiis incidunt ad, temporibus nobis provident voluptatem! Eligendi non iure molestias repellendus, sint in.</p>
      </AboutBox>
      </div >
    </AboutContainer>
  );
}
