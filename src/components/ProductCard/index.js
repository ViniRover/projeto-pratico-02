import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestProduct from '../../public/product-test.png';
import { Button } from '../Button';

import './styles.css';

export function ProductCard({ isCompany }) {
  const navigate = useNavigate();

  function handleEditProduct() {
    navigate('/home/produtos/edit');
  }

  return(
    <div 
      className="product-card-container"
      onClick={isCompany && handleEditProduct}
      style={{
        cursor: isCompany && 'pointer'
      }}
    >
      <img src={TestProduct} alt="Test Company"/>
      <div className="product-description">
        <h3>Titulo do produto</h3>
        <span>
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </span>
      </div>
      <div className="product-data-container">
        <span>Preço: R$ 32,00</span>
        {!isCompany && <span>Empresa: Trash Company</span>}
        <span>Quantidade: 47</span>
        {!isCompany && <Button label={'Comprar'}/>}
      </div>
    </div>
  );
}