import { useState } from 'react';

import { Menu } from '../../components/Menu';
import { ServicesCard } from '../../components/ServicesCard';

import './styles.css'

export function Services() {
  const [isCompany, setIsCompany] = useState(false);

  const person = {
    name: 'Nome da pessoa',
    address: 'Endereço: Rua Teste da Silva, Fulano, Nº 123',
    date: '24/10/2021'
  }

  return(
    <div className="services-container">
      <Menu isCompany={isCompany}/>
      <div className="services-cards">
        <span className="services-title">SERVIÇOS</span>
        <ServicesCard person={person}/>
        <ServicesCard person={person}/>
        <ServicesCard person={person}/>
      </div>
    </div>
  );
}