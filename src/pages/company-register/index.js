import { Link } from 'react-router-dom';
import { 
  MdEmail, 
  MdOutlineLock, 
  MdPerson, 
  MdLock,
  MdOutlineStore,
  MdOutlineBurstMode
} from 'react-icons/md';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import './styles.css';

export function CompanyRegister() {
  return(
    <div className="register-container">
      <div className="form-company-container">
        <span className="register-company-title">Cadastrar empresa</span>
        <form className="register-company-form">
          <div className="input-register-container">
            <Input placeholder={'Nome'} icon={MdPerson}/>
            <Input placeholder={'E-mail'} icon={MdEmail}/>
            <Input placeholder={'Endereço'} icon={MdOutlineStore}/>
            <Input placeholder={'CNPJ'} icon={MdOutlineBurstMode}/>
            <Input placeholder={'Senha'} type="password" icon={MdOutlineLock}/>
            <Input placeholder={'Confirmar senha'} type="password" icon={MdLock}/>
          </div>
          <div className="link-register-container">
            <Button label="Cadastrar"/>
            <span>Já possui um conta? <Link to="/company-login">Entre aqui</Link></span>
            <span>Quer se tornar um cliente? <Link to="/client-register">Clique aqui</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}