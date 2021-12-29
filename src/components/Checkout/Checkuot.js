import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import {useState} from 'react'
import { validarDatos } from '../helpers/validarDatos'
import { Navigate } from 'react-router-dom'
import { collection, Timestamp, writeBatch, addDoc, updateDoc, doc, getDoc, getDocs, query, where, documentId } from 'firebase/firestore/lite'
import { db } from '../firebase/config'
import Swal from 'sweetalert2'
import "./checkout.css"
import {  Col, Container, Row } from 'react-bootstrap'


export const Checkuot = () => {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)


    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        direccion:'',
        ciudad:'',
        movil:'',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!validarDatos(values)) {return}

        const orden = {
            buyer:{...values
            },
            item: carrito,
            total: totalCompra(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const orderRef = collection(db, "ordenes")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(),'in', carrito.map(el => el.id)))

        const outOfStock = []

        const productos = await getDocs(q)
        
        productos.docs.forEach((doc) => {
            const itemUpdate = carrito.find((prod) => prod.id === doc.id)

            if(doc.data().Stock >= itemUpdate.cantidad){
                batch.update(doc.ref,{
                    Stock: doc.data().Stock - itemUpdate.cantidad
                })
            }else{
                outOfStock.push(itemUpdate)
            }
        })

        if(outOfStock.length === 0){
             addDoc(orderRef, orden)
           .then((res) => {
                batch.commit()

                Swal.fire({
                    icon: 'success',
                    title: 'Su orden ha sido registrada',
                    text: `Su numero de orden es: ${res.id}`
                })
                vaciarCarrito()
            })
             
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No hay Stock de los siguientes productos: ',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }

       

        
    }

    return (

        <>
        {carrito.length === 0
         ? <Navigate to="/"/>
         :
        <Container>
            <Row>
                <Col sm={3} className='col1'>
                </Col>
                <Col sm={6}>
                <h2>Terminar mi compra</h2>

<form onSubmit={handleSubmit}>
    
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input 
        onChange={handleInputChange}
        name="nombre"
        value={values.nombre}
        className="form-control"
        type="text"
    />
    {values.nombre.length < 4 && <small>Min 4 caracteres </small>}
    
    <br/>
    <label for="exampleInputEmail1" class="form-label">Apellido</label>
    <input 
        onChange={handleInputChange}
        name="apellido"
        value={values.apellido}
        className="form-control"
        type="text"
        
       
    />
    {values.apellido.length < 4 && <small>Min 4 caracteres </small>}
<br/>
    <label for="exampleInputEmail1" class="form-label">Direccion</label>

<input 
        onChange={handleInputChange}
        name="direccion"
        value={values.direccion}
        className="form-control"
        type="text"
        
       
    />

<br/>
    <label for="exampleInputEmail1" class="form-label">Ciudad</label>
<input 
        onChange={handleInputChange}
        name="ciudad"
        value={values.ciudad}
        className="form-control"
        type="text"
        
       
    />
    {values.ciudad.length < 4 && <small>Min 4 caracteres </small>}
<br/>
<label for="exampleInputEmail1" class="form-label">Numero de Movil</label>
<input 
        onChange={handleInputChange}
        name="movil"
        value={values.movil}
        className="form-control"
        type="Number"
        
       
    />
{values.movil.length < 10 && <small>Min 10 dijitos con codigo de Area </small>}

<br/>
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input 
        onChange={handleInputChange}
        name="email"
        value={values.email}
        className="form-control"
        type="email"
        
    />
        {values.email.length < 6 && <small> Min 6 caracteres </small>}

<br/>
    <label for="exampleInputEmail1" class="form-label">Confirmar Email</label>
        <input 
        onChange={handleInputChange}
        name="emailConfirm"
        value={values.emailConfirm}
        className="form-control my-2"
        type="email"
        
    />

    {values.emailConfirm !== values.email && <small>Email no coinside</small>}
    <br/>
    <button type="submit" className='btn btn-primary'>Enviar</button>
            
</form>

                </Col>
                <Col sm={3} className='col1'>
                </Col>
            </Row>
            
        </Container>
        
            
       
        }

        </>
    )
}
