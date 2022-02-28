import { useState } from 'react';
import { CompanyCard } from '../../components/CompanyCard';
import { Menu } from '../../components/Menu';

import './styles.css';

export function Company() {
  const [isCompany, setIsCompany] = useState(false);

  return(
    <div className="companies-container">
      <Menu isCompany={isCompany}/>
      <div className="companies-card">
        <span className="companies-title">EMPRESAS</span>
        <CompanyCard 
          companyName={'Nome da empresa'}
        />
        <CompanyCard 
          companyName={'Nome da empresa'}
        />
        <CompanyCard 
          companyName={'Nome da empresa'}
        />
      </div>
    </div>
  );
}