import { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PersonForm from '../components/PersonForm';
import PeopleList from '../components/PeopleList';

function Main() {
  // estado
  const [mensaje, setMensaje] = useState('cargando ...')
  const [people, setPeople] = useState([])
  const [loaded, setLoaded] = useState(false)


  useEffect(()=>{
    // se carga el mensaje de prueba
    axios.get(window.$api)
    .then(res => {
      console.log(res);
      setMensaje(res.data.message)
    })
    // se carga (desde el servidor) la listade personas
    axios.get(window.$api + '/people')
    .then(res => {
      setPeople(res.data.people)
      setLoaded(true)
    })

  }, []);

  function eliminarDOM (_id) {
    // la nueva gente es la misma que la antigua gente, menos el con el _id que queremos eliminar
    const newPeople =  people.filter(p => p._id !== _id)
    setPeople(newPeople)
  }

  return (
    <Container>
      <h2 className='text-center'>Mensaje <span className='text-danger'>{mensaje}</span></h2>
      <Row>
        <Col xs='5' className='p-4 bg-secondary'>
          <PersonForm />
        </Col>
        <Col xs='7' className='p-3 bg-warning'>
          {loaded === true ? 
            <PeopleList people={people} eliminarDOM={eliminarDOM} /> :
            'No hay gente todavía!!!!'
          }
        </Col>
      </Row>
    </Container>
  );
}

export default Main;