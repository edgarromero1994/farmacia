import React from 'react'

const PiePagina = () => {
  return (
    <div>
         <div className="pie-pagina">
      <p>Síguenos en redes sociales</p>
      <div className="redes-sociales">
     
      <a href="#" target="_blank" rel="noopener noreferrer">
      <i class="ri-facebook-box-fill"></i>
      </a>
       
      <a href="#" target="_blank" rel="noopener noreferrer">
      <i class="ri-whatsapp-fill">  </i>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="ri-instagram-fill"></i>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="ri-tiktok-fill"></i>
        </a>
        
        {/* Agrega más íconos de redes sociales según sea necesario */}
      </div>
      <div className="direccion-empresa">
        <p>Aldea Seoguis, San Juan Chamelco, A.V.</p>
        <img src="https://www.igssgt.org/wp-content/uploads/2022/08/Departamental-Alta-Verapaz-igss.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default PiePagina