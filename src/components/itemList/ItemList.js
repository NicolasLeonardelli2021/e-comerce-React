import { Container, Row } from "react-bootstrap"
import { Item } from "../item/Item"

import './itemList.css'

export const ItemList =({productos}) => {
    return (
        <Container className="contenedor">
            <h2>Productos</h2>
                <hr/>
                <Row md={3}>
                    {productos.map((prod)=> <Item prod={prod}/>)}
                </Row>

                
        </Container>
    )
}