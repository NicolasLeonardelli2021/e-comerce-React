import React from 'react';
import './App.css';
import { CartWidget } from '../cardWidget/CartWidget';
import { Container,Row,Col } from 'react-bootstrap';
import Logo from './Logo.png';

export const Header = () => {
  
return (

<Container>
<Row className="barraSuperior">
    <Col>
    <a className="inicio" href="">Iniciar Sesion</a>
    </Col>
  </Row>
  <Row className="barraInferior"> 
    <Col>
        <img src={Logo}/>
    </Col>
    <Col></Col>
    <Col>
        <CartWidget className="carrito"/>
    </Col>
  </Row>
    </Container>
)
}
