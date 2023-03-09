import { useParams } from "react-router-dom";

function Saludar() {
  const {nombre, color} = useParams()

  const colorLetra = color ? color : 'green'

  return (
    <div>
      <h3 style={{color: colorLetra}}>Buenos días {nombre}</h3>
    </div>
  );
}

export default Saludar;