import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { BASE_PATH } from "../../utils/constants";

import "./Product.scss";

const Product = (props) => {
  const { product, addProductCart } = props;

  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={`${BASE_PATH}/${product.image}`} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.extraInfo}</Card.Text>
          <Card.Text>Peso: {product.weight}g</Card.Text>
          <Card.Text>$ {product.price}</Card.Text>
          <Button onClick={() => addProductCart(product.id, product.name)}>
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
