import { useState } from 'react'

function RegisterForm(props) {

  // Definir nuestro estado
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    pass_confirm: ''
  })

  // Esta función cambia cualquier input asociado a un estado
  function changeInput (ev) {
    // 1. Obtengo el ID del input
    const nombre_propiedad = ev.target.id
    // 2. Obtengo el nuevo valor del input
    const newValue = ev.target.value
    
    // 3. Cambio el estado
    setState({
      ...state,
      [nombre_propiedad]: newValue
    })
  }

  function guardarUser (ev) {
    // 0. Prevenir que el formulario recargue la página
    ev.preventDefault()
    // 1. Guardo el usuario
    alert('Guardando al usuario ' + JSON.stringify(state))
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <form className="form-register" onSubmit={guardarUser}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input onChange={changeInput} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={changeInput} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input onChange={changeInput} type="password" id="password" />
        </div>
        <div>
          <label htmlFor="pass_confirm">Confirme contraseña:</label>
          <input onChange={changeInput} type="password" id="pass_confirm" />
        </div>
        <input type="submit" value="Guardar" />
      </form>
      <h4>Creando a la persona {state.name} {state.email}</h4>
    </div>
  );
}

export default RegisterForm;