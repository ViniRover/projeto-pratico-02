import TestProduct from '../../public/product-test.png';
import { Button } from '../Button';

import './styles.css';

export function ShopCartProductCard() {
  return(
    <div className="shop-cart-product-card-container">
      <img src={TestProduct} alt="Test Product" />
      <div className="shop-cart-product-data">
        <h3>Título do produto</h3>
        <span>Preço: R$ 32,00</span>
        <span>Empresa: Trash Company</span>
        <span>Quantidade: 1</span>
      </div>
      <Button label={'Adicionar'}/>
    </div>
  );
}