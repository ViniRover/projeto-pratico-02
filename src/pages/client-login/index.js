import { MdEmail, MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoLogoFacebook } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import './styles.css';

export function ClientLogin() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/home/produtos');
  }

  return(
    <div className="container">
      <div className="client-form">
        <div className="form-container">
          <span className="title-client">Entrar como usuário</span>
          <form>
            <Input placeholder="E-mail" type="text" icon={MdEmail}/>
            <Input placeholder="Senha" type="password" icon={MdOutlineLock}/>
            <Button label={'Entrar'} onClick={handleLogin}/>
          </form>
          <span className="divider"><span>ou</span></span>
          <div className="login-as">
            <button>
              <FcGoogle size={20}/>
              Entrar com Google
            </button>
            <button>
              <IoLogoFacebook size={20} color="blue"/>
              Entrar com Facebook
            </button>
            <button>
              <IoLogoApple size={20}/>
              Entrar com Apple
            </button>
          </div>
          <div className="links-container-client">
            <span>Não tem conta? <Link to="client-register">Cadastre-se</Link></span>
            <span>Esqueceu a senha? <Link to="#">Clique aqui</Link></span>
          </div>
        </div>
      </div>
      <div className="client-image"></div>
    </div>
  );
}