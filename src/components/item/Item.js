import { ItemCount } from "../itemCount/ItemCount"

export const Item =({prod}) => {
    return(
        <div key={prod.id} className="card m-3" style={{width: "18rem"}}>
        <img src={prod.img} alt={prod.name}/>
        <div className="Card-body">
            <h3 className="card-title">{prod.name}</h3>
            <p className="Card-text"> Precio: ${prod.price}</p>
            <ItemCount/>
            <button className="btn btn-primary"> Agregar </button>
        </div>
    </div>
    )
}