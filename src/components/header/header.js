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
   
  </Row>
  <Row className="barraInferior"> 
    <Col sm={3}>
        <Link to="/" className="logo"><img src={Logo}/></Link>
    </Col>
    <Col sm={6}>
    <img className="logos" src='https://firebasestorage.googleapis.com/v0/b/ecomerce-c995a.appspot.com/o/logos%2Fnisuta.png?alt=media&token=93e1f7ae-9dbc-4c72-9e43-7bba85e8dd59'/>
      <img className="logos" src='https://firebasestorage.googleapis.com/v0/b/ecomerce-c995a.appspot.com/o/logos%2FGenius.png?alt=media&token=339db696-16bb-46ae-95c2-a9dfdd899199'/>
      <img className="amd" src='https://firebasestorage.googleapis.com/v0/b/ecomerce-c995a.appspot.com/o/logos%2FAMD.png?alt=media&token=c2835108-9cc1-4da4-ad95-5af95d539c29'/>
      <img className="logos" src='https://firebasestorage.googleapis.com/v0/b/ecomerce-c995a.appspot.com/o/logos%2FIntel.png?alt=media&token=fa7dd870-b37f-4395-a24d-be941229802c'/>
      <img className="logos" src='https://firebasestorage.googleapis.com/v0/b/ecomerce-c995a.appspot.com/o/logos%2FNVIDIA.png?alt=media&token=71934160-918a-471e-9e2c-ec5e79b6d556'/>
      <img className="logos" src=''/>
    </Col>
    <Col sm={3}>
        <Link to="cart"><CartWidget className="carrito"/> </Link>
    </Col>
  </Row>
    </Container>
)
}
