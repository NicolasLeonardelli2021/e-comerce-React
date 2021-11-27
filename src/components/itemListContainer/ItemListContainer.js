import React from 'react'
import { ItemList } from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import {pedirDatos} from '../../datos/pedirDatos'
import { useParams } from 'react-router'


export const ItemListContainer = () => {

   const [loading, setLoading] = useState(false)
   const [productos, setproductos] = useState([])

   const {catId} = useParams()

    useEffect(() => {
        setLoading(true)
       pedirDatos()
       .then((resp)=>{

        if(!catId){
            setproductos(resp)
        }else{
            setproductos(resp.filter(prod =>prod.category === catId))
        }
           
       })
       .catch((error)=>{
           console.log(error)
       })
       .finally(()=> {
            setLoading(false)
       })
    }, [catId])


    return (
        <>
         {loading ? <h2>Cargando...</h2>: <ItemList productos={productos}/>}
        </>
        
    )
}
