import { Link } from "react-router-dom";
import axios from 'axios'

function PeopleList(props) {
  const people = props.people
  const eliminarDOM = props.eliminarDOM

  function eliminar(_id) {
    const seguro = window.confirm('¿Seguro que deseas eliminar esta persona?')
    if (seguro === false) {
      return
    }
    axios.delete('http://localhost:8000/api/people/' + _id)
    .then(() => {
      alert('La persona ha sido eliminada')
      eliminarDOM(_id)
    })
  }

  return (
    <section>
      <h3>Lista de Personas</h3>
      <ul>
        {
          people.map(person => 
            <li key={person._id}>
              <Link to={"/detail/" + person._id}>{person.name} {person.lastName}</Link>
              {'  '}
              <button onClick={() => eliminar(person._id)} className='btn btn-danger'>Eliminar</button>
              {'  '}
              <Link className="btn btn-success" to={'/edit/' + person._id} >Editar</Link>
            </li>
          )
        }
      </ul>
    </section>
  );
}

export default PeopleList;