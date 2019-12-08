import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import {
    Container,
    Col,
    Row,
    Image,
    Button,
    ButtonGroup,
    Form,
    Dropdown
  } from "react-bootstrap";

const ProductDetails = (props) => {
    
    let [productName, setProductName] = useState(props.product.name);
    let [productArtNr, setProductArtNr] = useState(props.product.artNr);
    let [productPrice, setProductPrice] = useState(props.product.price);
    let [productColor, setProductColor] = useState("");
    let [productSize, setProductSize] = useState("M");

    const addToCart = (product) => {
        // setProductName(product.name);
        // setProductArtNr(product.artNr);
        // setProductPrice(product.price);

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
                                {['radio'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        {props.product.colors.map(color => (
                                            <Form.Check 
                                            key={color.id} 
                                            inline label={color.name} 
                                            type={type} 
                                            id={`inline-${type}-${color.id}`} 
                                            value={color.name}
                                            onChange={event => setProductColor(event.target.value)}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </Form>   
                        </label>
                    </div>
                    <div>
                        <label>
                            Välj storlek
                            <div>
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="secondary" size="sm">
                                    {/* Lägg till setState hooksen för att ändra på input */}
                                     {productSize}
                                    </Button>
                                    <Dropdown.Toggle
                                    split
                                    size="sm"
                                    variant="secondary"
                                    id="dropdown-split-basic"
                                    />
                                    <Dropdown.Menu>
                                        {/* Får inte fram size */}
                                    {props.product.sizes.map(size => (
                                        <Dropdown.Item 
                                        key={size.id} 
                                        value={size.name}
                                        onChange={event => setProductSize(event.target.value)}
                                        >{size.name}</Dropdown.Item>
                                    ))}
                                    </Dropdown.Menu>
                                </Dropdown> 
                            </div>      
                        </label>
                    </div>
                    <Button 
                        onClick={addToCart()}
                        >Köp</Button>
                    <Button>Spara</Button>
                </Col>
             </Row>
        </Container>
    )
}

export default ProductDetails;