import { Link } from 'react-router-dom';
import Logo from '../../public/logo.png';
import BackgroundImage from '../../public/image-01.png';

import './styles.css';

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
        <h2>SOBRE NÓS</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.
      </div>
      <div className="partners">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.
      </div>
      <footer>
        <div>
          <img src={Logo} alt="logo-footer" />
          <span>Telefone: +55 (48) 99999-0000</span>
          <span>Email: trashsolutions@gmail.com</span>
        </div>
      </footer>
    </>
  );
}