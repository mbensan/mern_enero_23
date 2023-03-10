import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contacto() {
  const [persona, setPersona] = useState('')

  // definimos nuestra función para navegar
  const navegar = useNavigate()

  function decir_hola(ev) {
    // 1. Evitar que página se recargue
    ev.preventDefault()
    console.log(persona);
    navegar('/saludar/' + persona)
  }

  return (
    <div>
      <h3>Página de Contacto</h3>
      <form onSubmit={decir_hola}>
        <p>Ingrese el nombre de la persona que desea saludar</p>
        <input type="text" required onChange={ev => setPersona(ev.target.value)}  />
        <input type="submit" value="Saludar" />
      </form>
    </div>
    
  );
}

export default Contacto;