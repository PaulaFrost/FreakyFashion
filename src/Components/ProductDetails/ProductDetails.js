import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import {
    Container,
    Col,
    Row,
    Image,
    Button,
    Form
  } from "react-bootstrap";

const ProductDetails = (props) => {
    
    let [productName, setProductName] = useState(props.product.name);
    let [productArtNr, setProductArtNr] = useState(props.product.artNr);
    let [productPrice, setProductPrice] = useState(props.product.price);
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
    }

    return(
        <Container className="mt-3">
            <Row key={props.product.id}>
                <Col md={5}>
                    <Image fluid key={props.product.id} src={props.product.image} />
                </Col>
                <Col md={6}>
                    <h2>{props.product.name}</h2>
                    <p>{props.product.artNr}</p>
                    <p>{props.product.description}</p>
                    <h5><span>{props.product.price}</span> SEK</h5>
                    <div>
                        <label>
                            Välj färg
                            <Form>
                            <fieldset>
                            <Form.Group>
                                {props.product.colors.map(color => (
                                    <Form.Check 
                                    key={color.id} 
                                    inline label={color.name} 
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
                                onChange={event => setProductSize(event.target.value)}>
                                    {props.product.sizes.map(size => (
                                        <option key={size.id} value={size.name}>{size.name}</option>
                                    ))}
                            </select>
                        </label>
                    </div>
                    <Button onClick={addToCart} className="mt-3 mr-3">Köp</Button>
                    <Button className="mt-3 mr-3">Spara</Button>
                </Col>
             </Row>
        </Container>
    )
}

export default ProductDetails;