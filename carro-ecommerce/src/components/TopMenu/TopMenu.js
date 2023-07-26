import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { ReactComponent as Logo } from "../../assets/img/Helado.svg";

import "./TopMenu.scss";

export default function TopMenu(props) {
  const { productsCart, getProductsCart } = props;
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        <MenuNav />
        <Cart productsCart={productsCart} getProductsCart={getProductsCart} />
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
      <h2>Tienda de helados</h2>
    </Navbar.Brand>
  );
}

function MenuNav() {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#">Aperitivos</Nav.Link>
      <Nav.Link href="#">Productos</Nav.Link>
      <Nav.Link href="#">Mascotas</Nav.Link>
    </Nav>
  );
}
