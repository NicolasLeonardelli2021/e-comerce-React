
import React, { useState, useContext } from 'react'
import './itemCount.css'
import { Card,Button, Container, Col,Row } from "react-bootstrap"
import { CartContext } from '../context/CartContext'



export const ItemCount = ({max, cantidad, setCantidad,id, name, price, img}) => {

    const {carrito, agregarAlCarrito, removerCarrito} = useContext(CartContext)


const sumarCantidad = () =>{
    
     cantidad < max && setCantidad(cantidad+ 1)
  
}
console.log(max)

const restarCantidad = () =>{
    
    cantidad > 1 && setCantidad(cantidad-1)
    
}


return (
<>
    <h4>Cantidad</h4>
    <Container className="count">
        <Row className="filaCount">
            <Col>
                <Button variant={cantidad > 1 ? "primary" : "danger"} onClick={restarCantidad}>-</Button>
            </Col>
            <Col sm={8} className="colCount">
                <span>{cantidad} </span>
            </Col>
            <Col>
                <Button variant={cantidad < max ? "primary" : "danger"} onClick={sumarCantidad}>+</Button>
            </Col>
        </Row>
        <p>{max} disponibles</p>
        

        </Container>

</>

)


}