import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

const LargeSpot = props => {
  return (
    <Container>
      <Row className="mt-3 lg-expand">
        {props.largeSpotImage.map(item => (
          <Col key={item.id}>
            <Image fluid src={item.href} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LargeSpot;
