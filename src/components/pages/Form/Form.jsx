import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });
  //console.log(userData);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    let data = (evento = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastName,
    });
    //se puede enviar info al backend- login etc
    console.log(data);
  };

  const handleChange= (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h2>ESTE ES UN FORMULARIO</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Ingrese su Nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          id=""
          placeholder="Ingrese su Apellido"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
