import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PersonDetail() {

  const {id} = useParams()

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [createdAt, setCreatedAt] = useState('')

  useEffect(() => {
    console.log("Cargando el usuario " + id)
    axios.get('http://localhost:8000/api/people/' + id)
    .then(res => {
      setName(res.data.name)
      setLastName(res.data.lastName)
      setCreatedAt(res.data.createdAt)
    })

  }, [id])

  return (
    <section>
      <h3>Detalles de {name} {lastName}</h3>
      <h5>Creado en {createdAt}</h5>
    </section>
  );
}

export default PersonDetail;