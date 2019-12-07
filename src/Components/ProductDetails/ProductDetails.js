import React from "react";
import "font-awesome/css/font-awesome.min.css";
import {
    Container,
    Col,
    Row,
    Image,
    Button,
    Dropdown
  } from "react-bootstrap";

const ProductDetails = (props) => {
      
    return(
        <Container>
            {props.products.map(product =>
            <Row>
                <Col md={5}>
                    <Image fluid key={product.id} src={product.image} />
                </Col>
                <Col>
                    <h2>{product.name}</h2>
                    <p>{product.artNr}</p>
                    <p>{product.description}</p>
                    <h5><span>{product.price}</span> SEK</h5>
                    {/* FORTSÄTT JOBBA HÄR!!!! */}
                </Col>
             </Row>
            )}
        </Container>
    )
}

export default ProductDetails;