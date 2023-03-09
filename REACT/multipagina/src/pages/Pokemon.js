import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Pokemon() {
  // parámetro que llega desde la URL
  const {id} = useParams()

  // estado del componente
  const [pokemon, setPokemon] = useState('')

  useEffect(() => {
    cargarPokemon()
  }, [id])

  async function cargarPokemon () {
    let datos = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    datos = await datos.json()
    setPokemon(datos.name)
  }

  return (
    <div>
      <h3>El pokemon de ID {id} se llama {pokemon}</h3>
    </div>
  );
}

export default Pokemon;