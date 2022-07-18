import React,{useState} from 'react'

const ItemCount = ({stock}) => {
    const[contador, setContador]=useState(0)

    const sumar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }
    const [action, setAction]=React.useState("comprar")
    const AddToCart = () => (
        <button onClick={() => setAction("carrito")}>Comprar</button>
    )
    const GoToCart = () => (
        <button>Ir al Carrito</button>
    )
    const Button = action === "comprar" ? AddToCart : GoToCart

  return (
    <div>
        <button onClick={restar}>-</button>
        <span>{contador}</span>
        <button onClick={sumar}>+</button>
        <Button></Button>
    </div>
  )
}

export default ItemCount