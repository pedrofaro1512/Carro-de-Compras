import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { ReactComponent as Logo } from "../../assets/img/Cafe.svg";

import "./TopMenu.scss";

export default function TopMenu(props) {
  const { productsCart, getProductsCart, products, className } = props;
  return (
    <Navbar bg="dark" variant="dark" className={`top-menu ${className}`}>
      <Container>
        <BrandNav />
        <MenuNav />
        <Cart
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
      <h2>Tienda de cafés</h2>
    </Navbar.Brand>
  );
}

function MenuNav() {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#">Dulces</Nav.Link>
      <Nav.Link href="#">Métodos</Nav.Link>
      <Nav.Link href="#">Preparación</Nav.Link>
    </Nav>
  );
}
