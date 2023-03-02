import { useState } from "react";

function Colors() {

  const [colors, setColors] = useState(
    ['violet']
  )

  const [newColor, setNewColor] = useState('')

  function addColor (ev) {
    ev.preventDefault()
    // agrego el nuevo color a la lista de colores
    setColors(
      [...colors, newColor]
    )
    // limpio el input
    setNewColor('')
  }

  function borrar (ev) {
    console.log(ev.target.dataset.key);
    const newColors = colors.filter(col => col != ev.target.dataset.key)
    console.log(newColors);
    setColors(newColors)
    // TODO: Eliminar el color que recibe doble click
  }

  return (
    <div className="colors">
      <form onSubmit={addColor}>
        <input type="text" required value={newColor} onChange={ ev => setNewColor(ev.target.value) } />
        <input type="submit" value="Crear" />
      </form>
      <div className="squares">
        {colors.map( color => 
          <div data-key={color} key={color} onDoubleClick={borrar} style={{backgroundColor: color}}></div>
        )}

      </div>
    </div>
  );
}

export default Colors;