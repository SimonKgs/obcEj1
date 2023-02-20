import React from "react";
import PropTypes from "prop-types";

export const ComponenteB = ({ contacto, cambiarEstado }) => {
  const { nombre, apellido, email, conectado } = contacto;
  return (
    <div>
      <h2>
        nombre: {nombre} apellido: {apellido}
      </h2>
      <h3>email: {email}</h3>
      <h4>Estado: {conectado ? "En linea" : "Desconectado"} </h4>
      <button onClick={()=> cambiarEstado(email)}>
        {conectado ? "desconectar" : "conectar"}
      </button>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.object,
};
