import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Update() {

  const {_id} = useParams()

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const navegar = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/api/people/' + _id)
    .then(res => {
      // tengo que guardar el nombre y el apellido en el  estado
      setName(res.data.name)
      setLastName(res.data.lastName)
    })
  }, [_id])

  function updatePerson(ev) {
    ev.preventDefault()
    axios.put(
      'http://localhost:8000/api/people/' + _id,  // ruta de la solicitud AJAX
      {
        name,           // los datos del formulario que contienen los nuevos nombre y apellido
        lastName
      }
    )
    .then(res => {
      alert('Persona fué actualizada')
      navegar('/')
    })
  }

  return (
    <div>
      <h2>Editar Persona</h2>
      <section>
        <form onSubmit={updatePerson}>
          <p>
            <label htmlFor="name">Nombre:</label>
            <input type="text" required onChange={ev => setName(ev.target.value)} value={name} />
          </p>
          <p>
            <label htmlFor="lastName">Apellido:</label>
            <input type="text" required onChange={ev => setLastName(ev.target.value)} value={lastName}  />
          </p>
          <input type="submit" value="Guardar" />
        </form>
      </section>
    </div>
  );
}

export default Update;