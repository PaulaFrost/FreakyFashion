import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap";

const ProductDetails = product => {
  let [productName] = useState(product.product.name);
  let [productArtNr] = useState(product.product.artNr);
  let [productPrice] = useState(product.product.price);
  let [productColor, setProductColor] = useState("");
  let [productSize, setProductSize] = useState("M");

  let addToCart = () => {
    const addedProduct = {
      productName,
      productArtNr,
      productPrice,
      productColor,
      productSize
    };

    console.log(addedProduct);
  };

  return (
    <Container className="mt-3">
      <Row key={product.product.id}>
        <Col md={5}>
          <Image fluid key={product.product.id} src={product.product.image} />
        </Col>
        <Col md={6}>
          <h2>{product.product.name}</h2>
          <p>{product.product.artNr}</p>
          <p>{product.product.description}</p>
          <h5>
            <span>{product.product.price}</span> SEK
          </h5>
          <div>
            <label>
              Välj färg
              <Form>
                <fieldset>
                  <Form.Group>
                    {product.product.colors.map(color => (
                      <Form.Check
                        key={color.id}
                        inline
                        label={color.name}
                        type="radio"
                        name="formHorizontalRadios"
                        value={color.name}
                        onChange={event => setProductColor(event.target.value)}
                      />
                    ))}
                  </Form.Group>
                </fieldset>
              </Form>
            </label>
          </div>
          <div>
            <label>
              Välj storlek
              <select
                className="ml-3"
                value={productSize}
                onChange={event => setProductSize(event.target.value)}
              >
                {product.product.sizes.map(size => (
                  <option key={size.id} value={size.name}>
                    {size.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <Button onClick={addToCart} className="mt-3 mr-3">
            Köp
          </Button>
          <Button className="mt-3 mr-3">Spara</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
