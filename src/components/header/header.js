import React from 'react';
import './App.css';
import { CartWidget } from '../cardWidget/CartWidget';
import { Container,Row,Col } from 'react-bootstrap';
export const Header = () => {
  
return (
//<div className = "header">
   // <div className="barraSuperior">
      //  <a className="inicio" href="">Iniciar Sesion</a>
    //</div>
    //<div className="barraLogo">
      //  <CartWidget/>
    //</div>

//</div>

<Container>
<Row className="barraSuperior">
    <Col>
    <a className="inicio" href="">Iniciar Sesion</a>
    </Col>
  </Row>
  <Row className="barraInferior"> 
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>
        <CartWidget className="carrito"/>
    </Col>
  </Row>
    </Container>
)
}
