import React from 'react'
import Item from '../Item/Item'

const ItemList = ({listaProductos}) => {
  return (
      <>
        <h3>Listado de Productos</h3>
        <div className='d-flex justify-content-between flex-wrap '>
            {listaProductos.map((producto) =><Item key={producto.id} producto={producto}/>)}
        </div>
      </>
        
  )
}

export default ItemList
