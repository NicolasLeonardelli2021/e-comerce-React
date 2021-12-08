import React from 'react'
import { ItemList } from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './itemListContainer.css'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query,where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const ItemListContainer = () => {

   const [loading, setLoading] = useState(false)
   const [productos, setproductos] = useState([])

   const {catId} = useParams()


    useEffect(() => {
        setLoading(true)
       
       // armar la referencia
       const productosRef = collection(db, 'productos')

       const q = catId ? query(productosRef, where('category', '==',catId)) : productosRef
       // Get a esa ref
        getDocs(q)
        .then((collection) => {
            const item = collection.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(item)
            setproductos(item)
        })
        .finally(()=>{
            setLoading(false)
        })
            
    }, [catId])


    return (
        <div className="containerList">
         {loading ? <Loader/> : <ItemList productos={productos}/>}
        </div>
        
    )
}
