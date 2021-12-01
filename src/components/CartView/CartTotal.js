import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Container, Row, Col} from 'react-bootstrap'

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
                        <button className="btn btn-success">Terminar mi compra</button>
                    </Col>
                </Row>
                
            </Container>
        
        </>
    )
}
