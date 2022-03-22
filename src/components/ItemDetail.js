import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'

const ItemDetail = () => {

    //fetch("http://jsonplaceholder.typicode.com/users")
    //.then((resultado) => {
    //    console.log("todo bien")
    //    console.table(resultado)
    //    const respuesta_formateada = resultado.json()
    //    return respuesta_formateada
    //})

    //.then((usuarios) => {
    //    console.log(usuarios)
    //})

    //.catch((error) => {
    //    alert("Ups, al parecer hubo un problema, vuelve a intentarlo")
    //    console.log(error)
    //})

    return (
        <div className='containerDetail'>
            <ItemDetailContainer/>  
        </div>
    )
}

export default ItemDetail