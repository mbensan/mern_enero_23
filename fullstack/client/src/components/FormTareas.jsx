import React, {useState} from "react";
import { useStore } from "../store";

function FormTareas() {

  const [text, setText] = useState('')

  const addTarea = useStore(state => state.addTarea)

  function addTareaForm(ev) {
    ev.preventDefault()
    console.log(`Agregando la tarea ${text}`);
    addTarea(text)
    setText('')
  }

  return (
    <section>
      <form onSubmit={addTareaForm}>
        <p>
          <label htmlFor="name">Texto:</label>
          <input type="text" onChange={ev => setText(ev.target.value)} required value={text} />
        </p>
        <input type="submit" value="Guardar" />
      </form>
    </section>
  );
}

export default FormTareas;