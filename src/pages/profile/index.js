import { useState } from 'react';
import { 
  MdEmail, 
  MdOutlineLock, 
  MdPerson, 
  MdLock,
  MdOutlineBurstMode,
  MdOutlineStore
} from 'react-icons/md';

import ProfilePicture from '../../public/profile.png';
import { Menu } from '../../components/Menu';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import './styles.css';

export function Profile() {
  const [isCompany, setIsCompany] = useState(false);

  return(
    <div className="profile-container">
      <Menu isCompany={isCompany}/>
      <div className="input-profile-container">
        <span>PERFIL</span>
        <img src={ProfilePicture} alt="Profile"/>
        <div style={{
          display: isCompany && 'flex'
        }}>
          <div style={{
           marginRight: isCompany && '20px'
         }}>
            <Input placeholder={'Nome'} icon={MdPerson}/>
            <Input placeholder={'E-mail'} icon={MdEmail}/>
            {isCompany && <Input placeholder={'Endereço'} icon={MdOutlineStore}/>}
          </div>
          <div>
            <Input 
              placeholder={isCompany ? 'CPNJ' : 'CPF'}
              icon={MdOutlineBurstMode}
            />
            <Input placeholder={'Senha'} type="password" icon={MdOutlineLock}/>
            <Input placeholder={'Confirmar senha'} type="password" icon={MdLock}/>
          </div>
        </div>
        <Button label={'Salvar'}/>
      </div>
    </div>
  );
}