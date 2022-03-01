import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../public/logo.png'
import { Button } from '../Button';

import './styles.css';

export function Menu({
  isCompany
}) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if(isCompany) {
      setItems([
        { name: 'Produtos', link: 'produtos' },
        { name: 'Serviços', link: 'servicos' },
        { name: 'Perfil', link: 'perfil' },
      ]);
    } else {
      setItems([
        { name: 'Produtos', link: 'produtos' },
        { name: 'Contratar', link: 'contratar' },
        { name: 'Perfil', link: 'perfil' },
        { name: 'Carrinho', link: 'carrinho' }
      ]);
    }
  }, [isCompany])

  return(
    <div className="menu-container">
      <img src={Logo} alt="Logo"/>
      {items.map((item, index) => (
        <Link 
          to={`/home/${item.link}`} 
          key={index}
          style={{
            color: 
              window.location.pathname.includes(item.link)
               && '#038B43'
          }}
        >
          {item.name}
        </Link>
      ))}
      <Button 
        label={'Sair'} 
        style={{
          borderRadius: 0,
          marginTop: 'auto',
        }}
        onClick={() => navigate(isCompany ? '/company-login' : '/client-login')}
      />
    </div>
  );
}