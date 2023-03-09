import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Buscador() {
  const [id, setId] = useState('')

  // definimos nuestra función para navegar
  const navegar = useNavigate()

  function decir_hola(ev) {
    // 1. Evitar que página se recargue
    ev.preventDefault()
    navegar('/pokemon/' + id)
  }

  return (
    <div>
      <h3>Página para buscar pokemones</h3>
      <form onSubmit={decir_hola}>
        <p>Ingrese el ID del pokemon que desea buscar</p>
        <input min="1" max="200" type="number" required onChange={ev => setId(ev.target.value)}  />
        <input type="submit" value="Saludar" />
      </form>
    </div>
    
  );
}

export default Buscador;