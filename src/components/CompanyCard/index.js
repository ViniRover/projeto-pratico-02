import TestCompany from '../../public/company-test.png';
import { Button } from '../Button';
import { Input } from '../Input';

import './styles.css';

export function CompanyCard() {
  return(
    <div className="company-card-container">
      <img src={TestCompany} alt="Test Company"/>
      <div className="company-data">
        <h3>Nome da empresa</h3>
        <span>
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </span>
      </div>
      <div className="input-date-container">
        <Input type="datetime-local"/>
        <Button label={'Contratar'}/>
      </div>
    </div>
  );
}