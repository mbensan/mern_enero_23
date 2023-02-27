import { useState } from 'react'

function Counter (props) {

  const [state, setState] = useState({
    count: 0,
    message: 'Todo bien por ahora'
  })

  function increment () {
    if (state.count >= 10) {
      setState({
        message: 'Te pasaste de 10',
        count: state.count + 1
      })
    }
    else {
      setState({
        ...state,
        count: state.count + 1
      })
    }
  }

  const reset = () => {
    setState({
      count: 0,
      message: 'Volvimos a cero'
    })
  }

  return (
    <div className="contador">
      <h3>{props.title}</h3>
      <h5>Has clickeado {state.count} veces</h5>
      <div className="center">
        <button onClick={increment}>Aumentar</button>
        <button onClick={reset}>Reiniciar</button>
      </div>
      <p className={`${state.count >= 11 ? 'danger' : ''}`}>{state.message}</p>
    </div>
    
  )
}

export default Counter;