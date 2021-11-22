import React from 'react'
import './itemDetail.css'
import {Col, Container, Row,Button} from 'react-bootstrap'
import {ItemCount} from '../itemCount/ItemCount'


export const ItemDetail = ({id,name,img,descripcion,price,category}) => {
    return (
        <>
            <Container className="containerDetail">
                <Row>
                    <Col sm={8}>
                    
                    <img src={img}></img>
                    </Col>
                    <Col className="detail" sm={4}>
                    <h3>{name}</h3>
                    <br/>

                    <p>{descripcion} </p>
                    <br/>
                    <p className="precio"> Precio: ${price}</p>

                    <br/>
                    <ItemCount/>
                    <br/>
                    <Button className="botonDetalle" variant="primary" size="lg"> Comprar Ahora</Button>
                    <br/>
                    <Button className="botonDetalle" variant="warning" size="lg"> Agregar al Carrito</Button>

                    </Col>
                </Row>
            </Container>
            
            
        </>
    )
}
