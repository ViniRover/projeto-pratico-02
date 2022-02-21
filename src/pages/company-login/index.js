import { MdEmail, MdOutlineLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

import { Input } from '../../components/Input';

import './styles.css';

export function CompanyLogin() {
  return(
    <div className="container">
      <div className="company-image"></div>
      <div className="company-form">
        <span className="title-company">Entrar como empresa</span>
        <div>
          <Input placeholder="E-mail" type="text" icon={MdEmail}/>
          <Input placeholder="Senha" type="password" icon={MdOutlineLock}/>
          <Button label={'Entrar'}/>
        </div>
        <div className="links-container">
          <span>Não tem conta? <Link to="/register">Cadastre-se</Link></span>
          <span>Esqueceu a senha? <Link to="/register">Clique aqui</Link></span>
        </div>
      </div>
    </div>
  );
}