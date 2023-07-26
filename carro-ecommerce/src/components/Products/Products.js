import React from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";

const Products = (props) => {
  const {
    products: { result, loading, error },
  } = props;

  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Loading />
        ) : (
          result.map((product, index) => (
            <div>
              <p>{product.name}</p>
            </div>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
