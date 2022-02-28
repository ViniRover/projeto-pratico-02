import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import './styles.css';

export function OpportunityCard({
  title,
  location,
}) {
  return(
    <div className="opportunity-container">
      <div className="opportunity-data">
        <span className="opportunity-title">{title}</span>
        <span>{location}</span>
      </div>
      <BsFillArrowRightCircleFill color='#038B43' size={30}/>
    </div>
  );
}