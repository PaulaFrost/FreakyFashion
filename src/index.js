import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";

let menuItemList = [
  { name: "Nyheter", url: "#" },
  { name: "Kategorier", url: "#" },
  { name: "Topplistan", url: "#" },
  { name: "Rea", url: "#" },
  { name: "Kampanjer", url: "#" },
  { name: "Varumärke", url: "#" },
  { name: "Shop", url: "#" },
  { name: "Instagram", url: "#" }
];

ReactDOM.render(
  <header>
      <Container fluid>
          <Row>
             <Col xs={2.5}><img src="https://via.placeholder.com/300x80?text=Logotype" alt="Logotype"></img> </Col>
             <Col className="align-self-center ml-1">
                <Form>
                    <FormControl type="text" placeholder="Search" className="mr-sm2" size="sm"/>  
                </Form>
             </Col>
             <Col className="align-self-center">
                <Button variant="light" size="sm">Image search</Button>
             </Col>
          </Row>
          <Row>
            <Navbar expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {menuItemList.map(menuItem => (
                        <Nav.Link href={menuItem.url}>{menuItem.name}</Nav.Link>  
                        ))}    
                    </Nav>
                </Navbar.Collapse> 
            </Navbar>
          </Row>
      </Container>
  </header>
  ,
  document.querySelector("#root")
)