import React, { useState,useEffect } from 'react'
import './itemDetailContainer.css'
import { useParams } from 'react-router'
import { pedirDatos } from '../../datos/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {Loader} from '../Loader/Loader'
export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
       setLoading(true)
       pedirDatos()
        .then(resp =>{
            setItem(resp.find(prod => prod.id === Number(itemId)))
        })
        .finally(()=>{
            setLoading()
        })
    }, [])
        return (
            <div className="containerProductos">
                { loading ?
                 <Loader/> : <ItemDetail {...item}/>}
            </div>
        )
    }



