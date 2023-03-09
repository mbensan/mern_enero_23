import { useParams } from "react-router-dom";

function Saludar() {
  const {nombre} = useParams()

  return (
    <div>
      <h3>Buenos días {nombre}</h3>
    </div>
  );
}

export default Saludar;