import React, { useState } from "react";
import { Contacto } from "../../models/contacto.class";
import { ComponenteB } from "../pure/ComponenteB";

export const ComponenteA = () => {
  const defaultContact = new Contacto(
    "Juan",
    "Perez",
    "jperez@gmail.com",
    false
  );

  const [contacto, setContacto] = useState({
    nombre: defaultContact.nombre,
    apellido: defaultContact.apellido,
    email: defaultContact.email,
    conectado: defaultContact.conectado,
  });

  const changeState = (id) => {
    setContacto((prevState) => ({
      ...prevState,
      conectado: !prevState.conectado,
    }));
  };

  return (
    <div>
      <h1>Contactos: </h1>
      <ComponenteB key={contacto.email} contacto={contacto} cambiarEstado={changeState} />
    </div>
  );
};
