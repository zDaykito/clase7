import React from 'react'
import { useState } from 'react'
import Item from './Item'
import ItemDetail from './ItemDetail' 

const ItemList = () => {

    const [loading, setLoading] = useState(true)

    return (
        <div>
            <button onClick={() => setLoading(!loading)}>Toggle</button>
            <Item/>
            <ItemDetail/>
        </div>
    )
}

export default ItemList