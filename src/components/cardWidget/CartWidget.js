import {BsFillCartCheckFill} from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import "./cardWidget.css"
import { useContext } from "react";

export const CartWidget = () => {

const {totalCantidad} = useContext(CartContext)

    return(
        <div>
        <BsFillCartCheckFill className="cardWidget"/>
        <span>{totalCantidad()}</span>
        </div>
    )
}