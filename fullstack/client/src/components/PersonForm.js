import { useState } from "react";
import axios from 'axios'

function PersonForm() {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  async function createPerson (ev) {
    // 1. Evitamos que se recargue el formulario
    ev.preventDefault()

    const resp = await axios.post('http://localhost:8000/api/people', {
      name: name,
      lastName: lastName
    })
    
    console.log(resp.data);
    setName('')
    setLastName('')
  }

  return (
    <section>
      <form onSubmit={createPerson}>
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
  );
}

export default PersonForm;