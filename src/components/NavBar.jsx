import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    listStyle: "none",
    textDecoration: "none",
  };
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  
  return (
    <>
    <nav className="item-nav">
    <div className="linkdelnav">
        <div>
          <Link to={"/"} style={navStyles}>
            <h2 className="inicio">Inicio</h2>
          </Link>
        </div>
        <div>
          <Link to={"/historia"} style={navStyles}>
            <h2 className="inicio">Historia</h2>
          </Link>
        </div>
        <div>
          <Link to={"/vision"} style={navStyles}>
            <h2 className="inicio">Vision</h2>
          </Link>
        </div>
      </div>
      <i className="ri-align-justify" onClick={toggleLinks}></i>
      {showLinks && (
            <div className="mobile-links">
            <div>
              <Link to={"/"} style={navStyles} onClick={() => setShowLinks(false)}>
                <h2 className="inicio">Inicio</h2>
              </Link>
            </div>
            <div>
              <Link to={"/historia"} style={navStyles} onClick={() => setShowLinks(false)}>
                <h2 className="inicio">Historia</h2>
              </Link>
            </div>
            <div>
              <Link to={"/vision"} style={navStyles} onClick={() => setShowLinks(false)}>
                <h2 className="inicio">Vision</h2>
              </Link>
            </div>
          </div>
      )}
   
      
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
          <i class="ri-shopping-cart-fill"></i>
            <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
    <div className="container"> {/* Contenedor principal */}
      {/* El contenido de tu página */}
      {/* Agrega aquí el contenido de tu página */}
    </div>
  </>
  );
};
