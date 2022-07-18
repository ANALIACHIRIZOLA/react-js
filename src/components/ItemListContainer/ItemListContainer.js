import React,{useState, useEffect}  from 'react'
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/Productos'
const ItemListContainer = ({saludo}) => {

  const [listaProductos, setListaProductos]=useState([])
  const [cargando, setCargando] = useState(false)

  const getProducts = async () =>{
      try{
        setCargando(true)
        const respuesta = await getData
        setListaProductos(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setCargando(false)
      }
  }

  useEffect(()=>{
    getProducts()
  }, [])

  return (
    <div>
        <h1>{saludo}</h1>
        <img src='/img/titulo logo.png' alt='logo' className="logo"/>
       {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
    </div>
  )
}

export default ItemListContainer