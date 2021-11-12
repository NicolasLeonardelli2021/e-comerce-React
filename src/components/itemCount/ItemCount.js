
import React,{useState} from "react"
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
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Container>
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

        <Button  variant="primary">COMPRAR</Button>
  </Card.Body>
</Card>

</>

)


}