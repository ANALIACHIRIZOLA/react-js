import React from "react"
import CartIcon from "../CartIcon/CartIcon";
export default function Navbar () {


const headerStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    listStyle: "none"
}

return (
    <header className="header">
        <div className="logo">Cianita Tienda Holistica</div>
            <ul className="Links" style={headerStyles}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartIcon/>
     </header>

    );
}