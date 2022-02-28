import { Button } from '../Button';
import './styles.css';

export function ServicesCard({
  person
}) {
  return(
    <div className="services-card-container">
      <div className="data-service-card">
        <h3>{person.name}</h3>
        <span>{person.address}</span>
        <span>Data de retirada: {person.date}</span>
      </div>
      <Button label={'Confirmar retirada'}/>
    </div>
  );
}