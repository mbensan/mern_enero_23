import { useState } from 'react';
import './LoginForm.css'

function CreateForm() {
  // cómo capturar los datos del formulario

  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  function cambiarUsername (ev) {
    const nuevoUsername = ev.target.value
    setUsername(nuevoUsername)
  }

  function cambiarName (ev) {
    const nuevoName = ev.target.value
    setName(nuevoName)
  }

  function crearUsuario (ev) {
    // 1. prevenir que se recargue la página
    ev.preventDefault()
    // 2. Creamos un objeto con los datos del estado (del formulario)
    const nuevousuario = {
      username: username,
      name: name,
      password: password
    }

    // 3. Guardamos el objeto creado
    console.log("Guardando nuevo Usuario", nuevousuario)

    // 4. Limpiamos los campos del formulario
    setUsername('')
    setName('')
    setPassword('')
  }

  return (
    <form id="login-form" onSubmit={crearUsuario}>
      <h3>Ingrese sus credenciales</h3>
      <div>
        <label htmlFor="username">Username:</label>
        <input value={username} type="text" id="username" onChange={cambiarUsername} required />

        <label htmlFor="name">Nombre:</label>
        <input value={name} type="text" id="name" onChange={cambiarName} required />

        <label htmlFor="password">Contraseña:</label>
        <input value={password} type="password" id="password" onChange={ ev => setPassword(ev.target.value) } required />
      </div>
      <div>
        <input type="submit" value="Ingresar" />
      </div>
    </form>
  );
}

export default CreateForm;