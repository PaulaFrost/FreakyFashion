import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  ButtonGroup,
  Dropdown
} from "react-bootstrap";
import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      <Container>
        <Row className="mt-5">
          {props.footerIcon.map(item => (
            <Col xs={12} lg={3} key={item.id}>
              <i key={item.id} className={item.href}>
                {" "}
                {item.titel}
              </i>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col xs={12} lg={3}>
            <h6 className="fa">Shopping</h6>
            {props.shoppingList.map(item => (
              <div key={item.id}>
                <a href={item.href}>{item.titel}</a>
              </div>
            ))}
          </Col>
          <Col xs={12} lg={3}>
            <h6 className="fa">Mina Sidor</h6>
            {props.myPageList.map(item => (
              <div key={item.id}>
                <a href={item.href}>{item.titel}</a>
              </div>
            ))}
          </Col>
          <Col xs={12} lg={2}>
            <h6 className="fa">Kundtjänst</h6>
            {props.supportList.map(item => (
              <div key={item.id}>
                <a href={item.href}>{item.titel}</a>
              </div>
            ))}
          </Col>
          <Col lg={2}></Col>
          <Col xs={12} lg={2}>
            <h6 className="fa">Välj land och språk</h6>
            <Row>
              <label>
                Land
                <div>
                  <Dropdown as={ButtonGroup}>
                    <Button variant="secondary" size="sm">
                      {/* Lägg till setState hooksen för att ändra på input */}
                      Sverige
                    </Button>
                    <Dropdown.Toggle
                      split
                      size="sm"
                      variant="secondary"
                      id="dropdown-split-basic"
                    />
                    <Dropdown.Menu>
                      {props.countryList.map(item => (
                        <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </label>
            </Row>
            <Row>
              <label>
                Språk
                <div>
                  <Dropdown as={ButtonGroup}>
                    <Button variant="secondary" size="sm">
                      {/* Lägg till setState hooksen för att ändra på input */}
                      Svenska
                    </Button>
                    <Dropdown.Toggle
                      split
                      size="sm"
                      variant="secondary"
                      id="dropdown-split-basic"
                    />
                    <Dropdown.Menu>
                      {props.languageList.map(item => (
                        <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </label>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
           <p>&copy; 2019 FreakyFashion</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
