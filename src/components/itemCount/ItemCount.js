

import './itemCount.css'
import { Card,Button, Container, Col,Row } from "react-bootstrap"



export const ItemCount = ({max, cantidad, setCantidad,add}) => {

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
        <br/>
        <Button className="botonDetalle" variant="primary" size="lg" onClick={add}> Agregar al carrito</Button>

        </Container>

</>

)


}