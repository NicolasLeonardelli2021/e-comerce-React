import React, { useState } from 'react'
import './itemDetail.css'
import {Col, Container, Row,Button} from 'react-bootstrap'
import {ItemCount} from '../itemCount/ItemCount'
import {useNavigate, Link} from 'react-router-dom'

export const ItemDetail = ({id,name,img,descripcion,price,category,Stock}) => {

    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)    // HOOK: controla el estado del componente
    const[agregado, setAgregado] = useState(false)

    const volverInicio = () =>{
        navigate('/')
    }

    const volver = () =>{
        navigate(-1)
    }
    console.log(agregado)
    const agregar = () => {
        console.log('Item agregado', {
            cantidad,
            id,
            name,
            price,
        })
        setAgregado(true)
    }
    return (
        <>
            <Container className="containerDetail">
                
                <Row>
                    <Col sm={8}>
                    <Row>
                        <Col>
                        <Button className ="botonDetalle" variant="outline-success" onClick={volverInicio}>Volver al Inicio</Button>
                        </Col>
                        <Col>
                        <Button className ="botonDetalle" variant="outline-success" onClick={volver}> Volver Atrás</Button>
                        </Col>
                    </Row>
                    <img src={img}></img>
                    </Col>
                    <Col className="detail" sm={4}>
                    <h3>{name}</h3>
                    <br/>

                    <p>{descripcion} </p>
                    <br/>
                    <p className="precio"> Precio: ${price}</p>

                    <br/>

                    {
                        !agregado
                        ? <ItemCount 
                        max={Stock}
                         cantidad={cantidad} 
                         setCantidad={setCantidad} 
                         add={agregar}/>
                        : <><Link to="/cart" className="btn btn-primary botonDetalle" size="lg"> Terminar mi compra</Link>
                        <br/>
                        <Link to="" className="btn btn-warning botonDetalle" size="lg"> Seguir comprando</Link></>


                    }
                    <br/>
                    <br/>

                    </Col>
                </Row>
            </Container>
            
            
        </>
    )
}
