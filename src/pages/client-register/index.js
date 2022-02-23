import { Link } from 'react-router-dom';
import { 
  MdEmail, 
  MdOutlineLock, 
  MdPerson, 
  MdLock,
  MdOutlineBurstMode
} from 'react-icons/md';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import './styles.css';

export function ClientRegister() {
  return(
    <div className="register-container">
      <div className="form-client-container">
        <span className="register-client-title">Cadastro</span>
        <form className="register-client-form">
          <div className="input-register-client-container">
            <Input placeholder={'Nome'} icon={MdPerson}/>
            <Input placeholder={'E-mail'} icon={MdEmail}/>
            <Input placeholder={'CPF'} icon={MdOutlineBurstMode}/>
            <Input placeholder={'Senha'} type="password" icon={MdOutlineLock}/>
            <Input placeholder={'Confirmar senha'} type="password" icon={MdLock}/>
          </div>
          <div className="link-register-client-container">
            <Button label="Cadastrar"/>
            <span>Já possui um conta? <Link to="/client-login">Entre aqui</Link></span>
            <span>Quer se tornar uma empresa? <Link to="/company-register">Clique aqui</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}