import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import "./Hero.css";

const Hero = props => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={5} >
          <h3>{props.heroCollection.titel}</h3>
          <p>{props.heroCollection.description}</p>
          <Button variant="info" className="mb-3"><a className="hero-a" href={props.heroCollection.link}>Buy Collection</a></Button>
        </Col>
        <Col lg={7}>
          <Image fluid src={props.heroCollection.href} alt={props.heroCollection.name} />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
