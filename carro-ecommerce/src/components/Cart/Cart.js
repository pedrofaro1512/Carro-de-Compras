import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/img/cart-empty.svg";
import { useState } from "react";
import { ReactComponent as CartFull } from "../../assets/img/cart-full.svg";
import { ReactComponent as Close } from "../../assets/img/close.svg";
import { ReactComponent as Garbage } from "../../assets/img/garbage.svg";
import { STORAGE_PRODUCTS_CART } from "../../utils/constants";

import "./Cart.scss";

export default function Cart(props) {
  const { productsCart, getProductsCart } = props;
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.requestFullscreen.overflow = "scroll";
  };

  const emptyCart = () => {
    localStorage.removeItem(STORAGE_PRODUCTS_CART);
    getProductsCart();
  };

  return (
    <>
      <Button variant="link" className="cart">
        {productsCart.length > 0 ? (
          <CartFull onClick={openCart} />
        ) : (
          <CartEmpty onClick={openCart} />
        )}
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>
        <CartContentHeader closeCart={closeCart} emptyCart={emptyCart} />
        Todos los productos....
      </div>
    </>
  );
}

function CartContentHeader(props) {
  const { closeCart, emptyCart } = props;

  return (
    <div className="cart-content__header">
      <div>
        <Close onClick={closeCart} />
        <h2>Carrito</h2>
      </div>

      <Button variant="link" onClick={emptyCart}>
        Vaciar
        <Garbage />
      </Button>
    </div>
  );
}
