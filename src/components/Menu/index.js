import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../public/logo.png'
import { Button } from '../Button';

import './styles.css';

export function Menu({
  isCompany
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if(isCompany) {
      setItems(['Produtos','Serviços','Perfil','Compras']);
    } else {
      setItems(['Produtos','Contratar','Perfil','Carrinho']);
    }
  }, [isCompany])

  return(
    <div className="menu-container">
      <img src={Logo} alt="Logo"/>
      {items.map((item, index) => (
        <Link 
          to={item.toLowerCase()} 
          key={index}
          style={{
            color: 
              window.location.pathname.includes(item.toLowerCase())
               && '#038B43'
          }}
        >
          {item}
        </Link>
      ))}
      <Button label={'Sair'} style={{
        borderRadius: 0,
        marginTop: 'auto',
      }}/>
    </div>
  );
}