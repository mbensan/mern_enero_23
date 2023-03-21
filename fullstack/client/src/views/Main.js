import { useEffect, useState } from 'react'
import axios from 'axios'

import PersonForm from '../components/PersonForm';
import PeopleList from '../components/PeopleList';

function Main() {
  const [mensaje, setMensaje] = useState('cargando ...')
  const [people, setPeople] = useState([])
  const [loaded, setLoaded] = useState(false)


  useEffect(()=>{
    axios.get('http://localhost:8000/api')
    .then(res => {
      console.log(res);
      setMensaje(res.data.message)
    })

    axios.get('http://localhost:8000/api/people')
    .then(res => {
      console.log(res.data);
      setPeople(res.data.people)
      setLoaded(true)
    })

  }, []);
  return (
    <div>
      <h2>Mensaje <span style={{color: 'red'}}>{mensaje}</span></h2>
      <PersonForm />
      {loaded ? 
        <PeopleList people={people} /> :
        ''
      }
      
    </div>
  );
}

export default Main;