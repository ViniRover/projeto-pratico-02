import { useState } from 'react';

import { Menu } from '../../components/Menu';
import { ServicesCard } from '../../components/ServicesCard';

import './styles.css'

export function Services() {
  const [isCompany, setIsCompany] = useState(false);

  return(
    <div className="services-container">
      <Menu isCompany={isCompany}/>
      <div className="services-cards">
        <span className="services-title">SERVIÇOS</span>
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
}