import { Button } from '../../components/Button';
import { Menu } from '../../components/Menu';
import { ShopCartProductCard } from '../../components/ShopCartProductCard';

import './styles.css';

export function ShopCart() {
  const product = {
    title: 'Título do produto',
    company: 'Trash Company',
    price: '32,00',
    quantity: 47
  }

  return(
    <div className="shopcart-container">
      <Menu />
      <div className="shop-cart-products">
        <span className="shop-cart-title">Carrinho</span>
        <ShopCartProductCard product={product}/>
        <ShopCartProductCard product={product}/>
        <ShopCartProductCard product={product}/>
        <Button label={'Finalizar Compra'} style={{
          marginTop: 50
        }}/>
      </div>
    </div>
  );
}