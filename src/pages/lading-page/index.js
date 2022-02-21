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