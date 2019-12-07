import React from "react";
import { Row, Container, Card, CardDeck } from "react-bootstrap";

const SmallSpots = props => {
  return (
    <Container>
      <Row className="mt-3">
        <CardDeck>
          {props.spotImage.map(item => (
            <Card className="text-center" key={item.id}>
              <Card.Img variant="top" 
              src={item.href} 
              alt={item.name} />
              <Card.Body>
                <Card.Title className="justify-content-center">{item.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </Row>
    </Container>
  );
};

export default SmallSpots;
