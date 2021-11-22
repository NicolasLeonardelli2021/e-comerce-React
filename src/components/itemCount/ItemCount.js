
import React,{useState} from "react"
import './itemCount.css'
import { Card,Button, Container, Col,Row } from "react-bootstrap"



export const ItemCount = () => {

    const [clicks, setClicks] = useState(1)    // HOOK: controla el estado del componente


const sumarClick = () =>{
    if(clicks <6){
    setClicks(clicks+ 1)
    }
}

const restarClick = () =>{
    if(clicks >1){
    setClicks(clicks-1)
    }
}

return (
<>
    <h4>Cantidad</h4>
    <Container className="count">
        <Row>
            <Col>
                <Button variant="primary" onClick={restarClick}>-</Button>
            </Col>
            <Col>
                {clicks}
            </Col>
            <Col>
                <Button variant="primary" onClick={sumarClick}>+</Button>
            </Col>
        </Row>

        </Container>

</>

)


}