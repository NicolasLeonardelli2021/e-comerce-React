import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CartTotal = () => {

    const {totalCompra } = useContext(CartContext)

    return (
        <>
            <Container>
                <Row>
                    <Col sm={6}>
                    </Col>
                    <Col sm={3}>
                        <br/>
                        <h3>Total de la Compra</h3>
                    </Col>
                    <Col sm={3}>
                    <br/>
                        <h3>$ {totalCompra()}</h3>
                        <br/>
                        <Link to="/checkout" className="btn btn-success">Terminar mi compra</Link>
                    </Col>
                </Row>
                
            </Container>
        
        </>
    )
}
