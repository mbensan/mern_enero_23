function Input(props) {

  function cambiarFilter (ev) {
    // 1. Obtengo lo que escribió el usuario en el INPUT
    const texto_input = ev.target.value
    // 2. Llamo a la función "props.setFilter" para cambiart el estado del padre
    props.setFilter(texto_input)
  }

  return (
    <div>
      <label>Escriba un filtro</label>
      <input onChange={cambiarFilter} className="input" name="filtro" type="text" />
    </div>
  );
}

export default Input;