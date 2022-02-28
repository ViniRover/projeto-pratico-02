import TestProduct from '../../public/product-test.png';
import { Button } from '../Button';

import './styles.css';

export function ShopCartProductCard({
  product
}) {
  return(
    <div className="shop-cart-product-card-container">
      <img src={TestProduct} alt="Test Product" />
      <div className="shop-cart-product-data">
        <h3>{product.title}</h3>
        <span>Preço: R$ {product.price}</span>
        <span>Empresa: {product.company}</span>
        <span>Quantidade: {product.quantity}</span>
      </div>
      <Button label={'Adicionar'}/>
    </div>
  );
}