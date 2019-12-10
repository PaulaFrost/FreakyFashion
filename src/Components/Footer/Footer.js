import React, { useState } from "react";
import {
  Container,
  Col,
  Row
} from "react-bootstrap";
import "./Footer.css";

const Footer = props => {

  let [language, setLanguage] = useState("");
  let [country, setCountry] = useState("");

  return (
    <footer>
      <Container>
        <Row className="mt-5">
          {props.footerIcon.map(item => (
            <Col xs={12} md={3} key={item.id}>
              <i key={item.id} className={item.href}>
                {" "}
                {item.titel}
              </i>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={3}>
            <h6 className="fa">Shopping</h6>
            {props.shoppingList.map(item => (
              <div key={item.id}>
                <a href={item.href}>{item.titel}</a>
              </div>
            ))}
          </Col>
          <Col xs={12} md={3}>
            <h6 className="fa">Mina Sidor</h6>
            {props.myPageList.map(item => (
              <div key={item.id}>
                <a href={item.href}>{item.titel}</a>
              </div>
            ))}
          </Col>
          <Col xs={12} md={2}>
            <h6 className="fa">Kundtjänst</h6>
            {props.supportList.map(item => (
              <div key={item.id}>
                <a href={item.href}>{item.titel}</a>
              </div>
            ))}
          </Col>
          <Col md={2}></Col>
          <Col xs={12} md={2}>
            <h6 className="fa">Välj land och språk</h6>
            <Row>
            <label>
                Land
                <div>
                <select
                  value={country}
                  onChange={event => setCountry(event.target.value)}>
                  {props.countryList.map(country => (
                  <option key={country.id} value={country.name}>{country.name}</option>
                  ))}
                </select>
                </div>
              </label>
            </Row>
            <Row>
              <label>
                  Språk
                  <div>
                <select
                  value={language}
                  onChange={event => setLanguage(event.target.value)}>
                  {props.languageList.map(language => (
                  <option key={language.id} value={language.name}>{language.name}</option>
                  ))}
                </select>
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
