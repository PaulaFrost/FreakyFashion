import React from "react";
import { Container, Card, CardDeck} from "react-bootstrap"

const SmallSpots = props => {
return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Lorem ipsum</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
)
}

export default SmallSpots