import React from "react";
import { Container, Nav, Navbar, Col, Row, Form, FormControl, Button} from "react-bootstrap"

const Header = props => {
return(
    <header>
      <Container fluid>
        <Row>
          <Col xs={2.5}>
            <img
              src="https://via.placeholder.com/300x80?text=Logotype"
              alt="Logotype"
            />{" "}
          </Col>
          <Col className="align-self-center ml-1">
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm2"
                size="sm"
              />
            </Form>
          </Col>
          <Col className="align-self-center">
            <Button variant="light" size="sm">
              Image search
            </Button>
          </Col>
        </Row>
        <Row>
          <Navbar expand="lg">
            <Navbar.Toggle area-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">  
                {props.menuItem.map(item => (
                  <Nav.Link href={item.url}>{item.name}</Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </header>
)
}

export default Header;