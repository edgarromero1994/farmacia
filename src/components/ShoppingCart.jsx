import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const generateWhatsAppLink = () => {
    const message = `Hola, estoy interesado en los siguientes productos: \n`;

    const productList = cart.map((item) => {
      return `${item.name} - Cantidad: ${item.quantity} - Precio: Q.${item.price}.00`;
    });

    const formattedProducts = productList.join("\n");

    const whatsappLink = `https://api.whatsapp.com/send?phone=50248465210&text=${encodeURIComponent(
      message + formattedProducts
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h2>Mi Factura</h2>
      </div>
      <div className="invoice-summary">
        <div>Cantidad del producto: {quantity}</div>
        <div>Total a pagar: Q.{totalPrice}.00</div>
        <button className="item-pagar" onClick={generateWhatsAppLink}>
          Pedir por WhatsApp
        </button>
      </div>
      <div className="invoice-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-name">{item.name}</div>
            <div className="">Cantidad: {item.quantity}</div>
            <div className="item-price">Precio: Q.{item.price}.00</div>
          </div>
        ))}
      </div>
    </div>
  );
};