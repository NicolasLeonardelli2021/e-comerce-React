import React from 'react'
import { ItemList } from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import {pedirDatos} from '../../datos/pedirDatos'
import { useParams } from 'react-router'
import './itemListContainer.css'
import { Loader } from '../Loader/Loader'


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
        <div className="containerList">
         {loading ? <Loader/> : <ItemList productos={productos}/>}
        </div>
        
    )
}
