import './item.css'
import { Link } from "react-router-dom"


export const Item =({prod}) => {
    return(
        <Link to={`/detail/${prod.id}`} style={{textDecoration: 'none'}}>
            <div key={prod.id} className="card m-3" style={{width: "18rem"}}>
        <img src={prod.img} alt={prod.name}/>
        <div className="Card-body">
            <h3 className="Card-title">{prod.name}</h3>
            <p className="Card-text"> Precio: ${prod.price}</p>
          
           
        </div>
    </div></Link>
    )
}