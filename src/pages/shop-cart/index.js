import { Button } from '../../components/Button';
import { Menu } from '../../components/Menu';
import { ShopCartProductCard } from '../../components/ShopCartProductCard';

import './styles.css';

export function ShopCart() {
  return(
    <div className="shopcart-container">
      <Menu />
      <div className="shop-cart-products">
        <span className="shop-cart-title">Carrinho</span>
        <ShopCartProductCard />
        <ShopCartProductCard />
        <ShopCartProductCard />
        <Button label={'Finalizar Compra'} style={{
          marginTop: 50
        }}/>
      </div>
    </div>
  );
}