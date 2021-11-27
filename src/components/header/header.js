import React from 'react';
import './App.css';
import { CartWidget } from '../cardWidget/CartWidget';
import { Container,Row,Col,Form,FormControl, Button } from 'react-bootstrap';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';


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
        <Link to="/" className="logo"><img src={Logo}/></Link>
    </Col>
    <Col sm={4}></Col>
    <Col sm={4}>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form> 
    </Col>
    <Col>
        <Link to="cart"><CartWidget className="carrito"/> </Link>
    </Col>
  </Row>
    </Container>
)
}
