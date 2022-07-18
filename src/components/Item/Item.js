import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto}) => {
  const {nombre, img, desc, stock} = producto
  return (
    <div className="card" style={{width:'10rem', margin:'.3rem'}}>
    <img src={img} className="card-img-top" alt={nombre}/>
    <div className="card">
        <p className="nombre">{nombre}</p>
        <p className="descripcion">{desc}</p>
    </div>
    <ItemCount stock={stock}/>
</div>
  )
}

export default Item