import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
  
    const agregarAlCarrito = (item) => {
        setCarrito([...carrito,item])
    }
  
    const removerCarrito = (id)=> {
      setCarrito(carrito.filter(prod => prod.id !== id))
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
  
    const existProducto = (id) =>{
      return carrito.some(prod => prod.id === id)
    }
    
  
    const totalCantidad = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad,0)
    }

    const totalCompra = () => {
        return carrito.reduce((acc,prod)=> acc + prod.cantidad * prod.price,0)
    }
    
    return (
        <CartContext.Provider value={{
          
            carrito,
            agregarAlCarrito,
            removerCarrito,
            vaciarCarrito,
            existProducto,
            totalCantidad,
            totalCompra,
          }}>
            {children}
              </CartContext.Provider>
    )
}