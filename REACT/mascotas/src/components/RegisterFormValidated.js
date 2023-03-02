import { useState } from 'react'

function RegisterFormValidated(props) {

  // Definir nuestro estado
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    pass_confirm: ''
  })

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passConfirmError, setPassConfirmError] = useState('')

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

  function changeName (ev)  {
    const newName = ev.target.value
    // cambiamos el "name" del estado
    setState({
      ...state,
      name: newName
    })
    // Realizamos las validaciones correspondientes
    if (newName === 'admin') {
      setNameError('Usted no se puede llamar "admin"')
    }
    else if (newName.length <= 2) {
      setNameError('El nombre debe se ser de largo al menos 2')
    }
    else {
      setNameError('')
    }
  }

  function changeEmail (ev)  {
    const newEmail = ev.target.value
    // cambiamos el "email" del estado
    setState({
      ...state,
      email: newEmail
    })
    // Realizamos las validaciones correspondientes
    if (newEmail.length <= 4) {
      setEmailError('El email debe se ser de largo al menos 5')
    }
    else {
      setEmailError('')
    }
  }

  function changePassword (ev)  {
    const newPassword = ev.target.value
    // cambiamos el "password" del estado
    setState({
      ...state,
      password: newPassword
    })
    // Realizamos las validaciones correspondientes
    if (newPassword.length <= 7) {
      setPasswordError('La contraseña debe se ser de largo al menos 7')
    }
    else {
      setPasswordError('')
    }
  }

  function changePasswordConfirm (ev)  {
    const passConfirm = ev.target.value
    // cambiamos el "pass_confirm" del estado
    setState({
      ...state,
      pass_confirm: passConfirm
    })
    // Realizamos las validaciones correspondientes
    if (passConfirm !== state.password) {
      setPassConfirmError('Las contraseñas deben coincidir')
    }
    else {
      setPassConfirmError('')
    }
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
          <input onChange={changeName} type="text" id="name" />
          { nameError.length > 0 ?
            <p className="error">{nameError}</p> : ''
          }
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={changeEmail} type="email" id="email" />
          { emailError.length > 0 ?
            <p className="error">{emailError}</p> : ''
          }
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input onChange={changePassword} type="password" id="password" />
          { passwordError.length > 0 ?
            <p className="error">{passwordError}</p> : ''
          }
        </div>
        <div>
          <label htmlFor="pass_confirm">Confirme contraseña:</label>
          <input onChange={changePasswordConfirm} type="password" id="pass_confirm" />
          { passConfirmError.length > 0 ?
            <p className="error">{passConfirmError}</p> : ''
          }
        </div>
        <input type="submit" value="Guardar" />
      </form>
      <h4>Creando a la persona {state.name} {state.email}</h4>
    </div>
  );
}

export default RegisterFormValidated;