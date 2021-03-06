import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Menu } from '../../components/Menu';

import './styles.css';

export function NewEditProduct({
  isEditing
}) {
  const navigate = useNavigate();
  const [isCompany, setIsCompany] = useState(false);

  function handleCancel() {
    navigate('/home/produtos');
  }

  return(
    <div className="new-edit-container">
      <Menu isCompany={isCompany} />
      <form className="new-edit-form">
        <span>
          {isEditing ? 'EDITAR' : 'ADICIONAR'} PRODUTO
        </span>
        <div>
          <Input withLabel={true} label={'Título'} />
          <Input withLabel={true} label={'Descrição'} />
          <Input withLabel={true} label={'Preço'} />
          <Input withLabel={true} label={'Quantidade'} />
        </div>
        <div>
          <Button label={'Salvar'}/>
          <Button label={'Cancelar'} style={{
            background: '#FFFFFF',
            color: '#038B43',
            border: '1px solid #038B43'
          }}
            onClick={handleCancel}
          />
        </div>
      </form>
    </div>
  );
}