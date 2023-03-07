import { useEffect, useState } from "react";
import axios from 'axios'


function Personajes() {

  const [personas, setPersonas] = useState([])
  const [contador, setContador] = useState(0)
  const [previous, setPrevious] = useState(null)
  const [next, setNext] = useState(null)
  
  const [seleccionado, setSeleccionado] = useState(null)

  async function cargar_personajes () {
    // forma de realizar una consulta asíncrona a la API
    let retorno = await axios.get('https://swapi.dev/api/people')
    
    // ahora guardamos los personajes en el estado
    setPersonas(retorno.data.results)
    setPrevious(retorno.data.previous)
    setNext(retorno.data.next)
    
  
    console.log(retorno)
  }

  async function cargar_proximos_personajes (url) {
    // forma de realizar una consulta asíncrona a la API
    let retorno = await fetch(url)
    // forma de desempaquetar una respuesta de API
    retorno = await retorno.json()

    // ahora guardamos los personajes en el estado
    setPersonas(retorno.results)
    setPrevious(retorno.previous)
    setNext(retorno.next)
  
    console.log(retorno)
  }

  useEffect(
    function () {
      cargar_personajes()
    },
    [contador]
  )

  async function seleccionar (ev, url) {
    ev.preventDefault()

    let result = await fetch(url)
    result = await result.json()

    console.log(result)
    setSeleccionado(result)
  }

  return (
    <section className="personajes">
      <div className="col">
        <h3>
          Lista de Personajes
          <button onClick={() => setContador(contador + 1)}>Recargar</button>
        </h3>
        <ul>
          {personas.map(persona =>
            <li key={persona.name}>
              <a href="#" onClick={ev => seleccionar(ev, persona.url)}>{persona.name}</a>
            </li>
          )}
        </ul>
        <div>
          { previous ?
            <button onClick={() => cargar_proximos_personajes(previous)}>Anterior</button>
            : ''
          }
          { next ?
            <button onClick={() => cargar_proximos_personajes(next)}>Siguiente</button>
            : ''
          }
        </div>
      </div>
      <div className="col">
        {seleccionado != null ?
          <div>
            <p><b>Nombre:</b> {seleccionado.name}</p>
            <p><b>Altura:</b> {parseInt(seleccionado.height)/100}</p>
            <p><b>Nombre:</b> {parseInt(seleccionado.mass)} Kg</p>
          </div>
          : ''
        }
      </div>
    </section>
  );
}

export default Personajes;