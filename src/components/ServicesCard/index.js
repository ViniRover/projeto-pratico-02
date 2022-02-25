import { Button } from '../Button';
import './styles.css';

export function ServicesCard() {
  return(
    <div className="services-card-container">
      <div className="data-service-card">
        <h3>Nome da pessoa</h3>
        <span>Endereço: Rua Teste da Silva, Fulano, Nº 123</span>
        <span>Data de retirada: 24/10/2021 </span>
      </div>
      <Button label={'Confirmar retirada'}/>
    </div>
  );
}