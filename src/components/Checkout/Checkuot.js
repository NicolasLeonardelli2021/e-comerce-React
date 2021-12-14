import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import {useState} from 'react'
import { validarDatos } from '../helpers/validarDatos'
import { Navigate } from 'react-router-dom'
import { collection, Timestamp, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const Checkuot = () => {

    const {carrito, totalCompra} = useContext(CartContext)


    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!validarDatos(values)) {return}

        const orden = {
            buyer:{...values
            },
            item: carrito,
            total: totalCompra(),
            date: Timestamp.fromDate(new Date())
        }

        const orderRef = collection(db, "ordenes")
        const productosRef = collection(db, "productos")

        carrito.forEach((prod) =>{
            const docRef = doc(productosRef,prod.id)

            getDoc(docRef)
                .then((doc) => {
                    updateDoc(doc.ref,{
                        stock: doc.data().stock - prod.cantidad
                    })
                })
            
        })


        addDoc(orderRef, orden)
            .then((res) => {
                console.log(res.id)
            })

        
    }

    return (

        <>
        {carrito.length === 0
         ? <Navigate to="/"/>
         :

        <div>
            <h2>Terminar mi compra</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange}
                    name="nombre"
                    value={values.nombre}
                    className="form-control"
                    type="text"
                    placeholder="nombre"
                />
                {values.nombre.length < 4 && <small>nombre invalido </small>}
                <input 
                    onChange={handleInputChange}
                    name="apellido"
                    value={values.apellido}
                    className="form-control"
                    type="text"
                    placeholder="Apellido"
                />

                <input 
                    onChange={handleInputChange}
                    name="email"
                    value={values.email}
                    className="form-control"
                    type="email"
                    placeholder="email"
                />

                    <input 
                    onChange={handleInputChange}
                    name="emailConfirm"
                    value={values.emailConfirm}
                    className="form-control my-2"
                    type="email"
                    placeholder="email Confirm"
                />

                {values.emailConfirm !== values.email && <small>Email no coinside</small>}
                <button type="submit" className='btn btn-primary'>Enviar</button>
            </form>

        </div>
        }
        </>
    )
}
