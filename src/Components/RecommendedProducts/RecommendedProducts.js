import React from "react";
import "font-awesome/css/font-awesome.min.css";
import {
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";

const RecommendedProducts = props => {
  return (
    <Container>
      <Row className="mt-5 ml-1">
        <p>Rekommenderat för dig</p>
      </Row>
      <Row>
        {props.recommenderProducts.map(product =>
          <Col key={product.id}>
            <Image fluid src={product.image}></Image>
          </Col>
          )}
      </Row>
    </Container>
  );
};

export default RecommendedProducts;
