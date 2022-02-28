import { Link } from 'react-router-dom';
import Logo from '../../public/logo.png';
import BackgroundImage from '../../public/image-01.png';
import Business from '../../public/business.png';
import Partner from '../../public/partner.png';

import './styles.css';
import { OpportunityCard } from '../../components/OpportunityCard';

export function LandingPage() {
  return(
    <>
      <header className="header-container">
        <div className="logo-container">
          <img src={Logo} alt="logo"/>
          <span>Trash Solutions</span>
        </div>
          <div className="list-container">
          <a href="#">Sobre nós</a>
          <a href="#">Nossos parceiros</a>
          <a href="#">Trabalhe Conosco</a>
          <div className="buttons-container">
            <Link to="/client-login">Sou cliente</Link>
            <Link to="/company-login">Sou empresa</Link>
          </div>
        </div>
      </header>
      <img 
        src={BackgroundImage} 
        alt="trash-background" 
        className="background-image"
      />
      <div className="about-us">
         <img 
            src={Business}
            alt="business" 
            id="business"
          />
          <div className="about-us-text">
            <h2 className="about-us-title">SOBRE NÓS</h2>
            <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum.
            </span>
          </div>
      </div>
      <div className="partners">
        <h2 className="partners-title">VEJA QUEM SÃO<span>NOSSOS PARCEIROS</span></h2>
        <div className="partner-data">
          <img src={Partner} alt="Partner" />
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum."
          </span>
        </div>
        <div className="pagination">
          <div/>
          <div className="green-div"/>
          <div />
        </div>
      </div>
      <div className="opportunities">
        <h2 className="opportunities-title">DESCUBRA NOSSAS<span>OPORTUNIDADES</span></h2>
        <div className="opportunities-cards">
          <OpportunityCard 
            title={'Full Stack Developer'}
            location={'Rio de Janeiro - RJ'}
          />
          <OpportunityCard 
            title={'Full Stack Developer'}
            location={'Rio de Janeiro - RJ'}
          />
          <OpportunityCard 
            title={'Full Stack Developer'}
            location={'Rio de Janeiro - RJ'}
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-data">
          <img src={Logo} alt="logo-footer" />
          <span>Telefone: +55 (48) 99999-0000</span>
          <span>Email: trashsolutions@gmail.com</span>
        </div>
        <span>2021 © Todos os direitos reservados. Trash solutions</span>
      </footer>
    </>
  );
}