import './styles.css';

import { Menu } from '../../components/Menu';
import { ProductCard } from '../../components/ProductCard';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function Products() {
  const navigate = useNavigate();
  const [isCompany, setIsCompany] = useState(false);

  function handleAddProduct() {
    navigate('/home/produtos/new');
  }

  return(
    <div className="products-container">
      <Menu />
      <div className="products-cards-container">
        <div className="title-add-button" style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCompany ? 'space-between' : 'center',
        }}>
          <span className="products-title">PRODUTOS</span>
          {isCompany && <Button label={'Adicionar Produto'} onClick={handleAddProduct} />}
        </div>
        <ProductCard isCompany={isCompany}/>
        <ProductCard isCompany={isCompany}/>
      </div>
    </div>
  );
}