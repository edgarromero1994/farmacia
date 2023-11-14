import React from "react";
import storeItems from "../data/products.json";
import { Item } from "./Item";

export const ItemList = () => {
  return ( 
    <>
     <div className="welcome-header">

      <div className="nombre-medicina">
      <h1>Centro de Medicina Alternativas Vida Natural De 
           Guatemala
        </h1>
      <img className="item-img" src=" https://www.aliatuniversidades.com.mx/hubfs/Imported_Blog_Media/UTAN-cuidados-de-enfermeria-en-los-pacientes-con-cancer-de-mama-1.jpg" alt="" />
      </div>

       <div className="mision">

        <img className="item-img" src="https://saludconlupa.com/media/images/productos_naturales_FPtr9XD.56bc70e8.fill-1800x945.jpg" alt="" />
      
          <p>Somos una empresa dedicada a contribuir a la preservación del medio ambiente
mediante la producción y comercialización de nuestros productos de medicina
natural, satisfacer a nuestros clientes ofreciéndoles productos innovadores de alta
calidad a precios accesibles, respaldados por un excelente servicio proporcionado
por nuestro personal.</p>
       </div>
        
      </div>

        <div className="items-list">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
    
    </>

  );
};
