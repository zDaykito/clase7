import React from 'react'
import { useState, useEffect } from 'react'

let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]

const Item = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        console.log("Ejecutando useEffect")

        const pedido = new Promise((res,rej) => {
            setTimeout(() => {
                res(productosIniciales)
            },2000) 
        })

        pedido
        .then((resultado) => {
            console.log("Estuvo Bien")
            setProductos(resultado)
        })
        .catch((error) => {
            console.log("Estuvo Mal")
        })

    },[])

    console.log(productos)

    return (
        <ul>
            {productos.map((producto) => {
                return <li key={producto.id}>{producto.nombre}</li>
            })}
        </ul>
    )
}

export default Item