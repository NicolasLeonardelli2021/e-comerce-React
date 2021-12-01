import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Container, Row, Col} from 'react-bootstrap'
import './Cart.css'
import { Link } from 'react-router-dom'
export const CartItem = ({name,price,id,cantidad,img}) => {

    const {removerCarrito } = useContext(CartContext)

    return (
        <>
               <Container>
                   <Row>
                       <Col sm={2}>          
                       <img src={img} className="imagenCart"></img>
                       </Col>
                       <Col sm={6}>
                       <h3>{name}</h3>
                       </Col>
                       <Col sm={1}>
                       <p>Cantidad </p>
                       <h4>{cantidad}</h4>
                       </Col>
                       <Col sm={3}>
                           <p>Sub Total </p>
                       <h3> ${cantidad*price}</h3>
                       </Col>
                   </Row>
                   <Row>
                       <Col>
                       <Link  to="" className="linkE" onClick={()=>{removerCarrito(id)}}>Eliminar</Link>
                       <Link  to="" className="linkE" onClick={()=>{}}>Comprar ahora</Link>

                       </Col>
                   </Row>
               </Container>
                <hr/>
                
                
                        
        </>
    )
}
