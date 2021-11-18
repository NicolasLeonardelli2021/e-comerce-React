import React from 'react'
import { ItemList } from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import {pedirDatos} from '../../datos/pedirDatos'


export const ItemListContainer = () => {

   const [loading, setLoading] = useState(false)
   const [productos, setproductos] = useState([])

    useEffect(() => {
        setLoading(true)
       pedirDatos()
       .then((resp)=>{
           setproductos(resp)
       })
       .catch((error)=>{
           console.log(error)
       })
       .finally(()=> {
            setLoading(false)
       })
    }, [])


    return (
        <>
         {loading ? <h2>Cargando...</h2>: <ItemList productos={productos}/>}
        </>
        
    )
}
