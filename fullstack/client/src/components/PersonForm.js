import { useState } from "react";
import axios from 'axios'

import Alert from 'react-bootstrap/Alert';

function PersonForm() {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  // lista de mensajes de errores
  const [messages, setMessages] = useState([])

  async function createPerson (ev) {
    // 1. Evitamos que se recargue el formulario
    ev.preventDefault()
    // 2. Envio la solicitud POST al servidor
    try {
      await axios.post(window.$api + '/people', {
        name: name,
        lastName: lastName,
        age: parseInt(age)
      })
      // 3. limpio los campos del formulario
      setName('')
      setLastName('')
      setAge('')

      alert('Persona creada correctamente')
    }
    catch(err) {
      console.log(err.response.data.errors)
      // 1. Obtenemos los errores que nos devuelve el servidor
      const errors = err.response.data.errors
      // 2. Creo un arreglo vacío
      const newMessages = []
      // 3.Itero sobre el objeto errors
      for (let error in errors) {
        newMessages.push(errors[error].message)
      }
      // 4. actualizo la lista de mensajes de error
      setMessages(newMessages)
    }
  }

  return (
    <section>
      {
        messages.map(message => 
          <Alert variant="danger">
            <b>{message}</b>
          </Alert>
        )
      }
      <form onSubmit={createPerson}>
        <p>
          <label htmlFor="name">Nombre:</label>
          <input type="text" onChange={ev => setName(ev.target.value)} value={name} />
        </p>
        <p>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" required onChange={ev => setLastName(ev.target.value)} value={lastName}  />
        </p>
        <p>
          <label htmlFor="age">Edad:</label>
          <input type="number" required onChange={ev => setAge(ev.target.value)} value={age}  />
        </p>
        <input type="submit" value="Guardar" />
      </form>
    </section>
  );
}

export default PersonForm;