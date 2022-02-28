import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestProduct from '../../public/product-test.png';
import { Button } from '../Button';

import './styles.css';

export function ProductCard({ 
  isCompany,
  product
}) {
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
        <h3>{product.title}</h3>
        <span>
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </span>
      </div>
      <div className="product-data-container">
        <span>Preço: R$ {product.price}</span>
        {!isCompany && <span>Empresa: {product.company}</span>}
        <span>Quantidade: {product.quantity}</span>
        {!isCompany && <Button label={'Comprar'}/>}
      </div>
    </div>
  );
}