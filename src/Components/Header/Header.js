import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Col,
  Row,
  Image,
  Form,
  FormControl
} from "react-bootstrap";

import "./Header.css"

const Header = props => {

  let [language, setLanguage] = useState("");

  return (
    <header>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Image
              src="https://metromode.se/files/2019/11/nakd.png"
              alt="Logotype"
            />
          </Col>
          <Col xs={12} md={4} className="align-self-center justify-content-end">
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm2"
                sm="2"
                size="sm"
              />
            </Form>
          </Col>
          <Col md={1}></Col>
          <Col md={3} className="align-self-center" expand="lg">
            <label>
              <select
                value={language}
                onChange={event => setLanguage(event.target.value)}>
                {props.language.map(language => (
                <option key={language.id} value={language.name}>{language.name}</option>
                ))}
              </select>
            </label>
            {props.icon.map(item => (
              <span key={item.id} className="icons">
                <i key={item.id} className={item.href}></i>
              </span> 
            ))}
          </Col>
        </Row>
        <Row>
          <Navbar expand="lg">
            <Navbar.Toggle area-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {props.menuItem.map(item => (
                  <Nav.Link key={item.id} href={item.url}>
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
