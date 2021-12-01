import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import { CartItem } from './CartItem'
import {CartTotal} from './CartTotal'

export const CartView = () => {

    const {carrito,vaciarCarrito,removerCarrito} = useContext(CartContext)
    return (
        <>
           <hr/>
            {
                carrito.length > 0
                ?
                <>
                <section>
                {
                    carrito.map((prod) => <CartItem {...prod}/>)
                }
            </section>
            <hr/>
            <div style={{textAlign:'center'}}>
                <CartTotal/>
                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                <Link to="/" className="btn btn-primary">Seguir Comprando</Link>
                <br/>
                <br/>
            </div>

                </>
                :
                <>
                <h2>
                    No hay productos agregados al Carrito
                </h2>
                <Link to="/" className="btn btn-primary">Volver a Inicio</Link>
                </>
            }
            

            </>
        
    )
}
