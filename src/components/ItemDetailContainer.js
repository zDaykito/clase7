import React from 'react'
import { useEffect, useState } from 'react'

let productoInicial = [
    {
        id: 1,
        nombre: "Producto 1 (ÚNICO)",
        precio: 100
    }
]

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    
    useEffect(() => {
        console.log("Ejecutando useEffect")

        const pedido = new Promise((res,rej) => {
            setTimeout(() => {
                res(productoInicial)
            },2000) 
        })

        pedido
        .then((resultado) => {
            console.log("Estuvo Bien")
            setProducto(resultado)
        })
        .catch((error) => {
            console.log("Estuvo Mal")
        })

    },[])

    console.log(producto)

    return (
        <ul>
            {producto.map((producto) => {
                return <li key={producto.id}>{producto.nombre}</li>
            })}
        </ul>
    )
}

export default ItemDetailContainer