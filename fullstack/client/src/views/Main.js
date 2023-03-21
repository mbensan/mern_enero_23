import { useEffect, useState } from 'react'
import axios from 'axios'

import PersonForm from '../components/PersonForm';

function Main() {
  const [mensaje, setMensaje] = useState('cargando ...')

  useEffect(()=>{
    axios.get('http://localhost:8000/api')
    .then(res => {
      console.log(res);
      setMensaje(res.data.message)
    })

  }, []);
  return (
    <div>
      <h2>Mensaje <span style={{color: 'red'}}>{mensaje}</span></h2>
      <PersonForm />
    </div>
  );
}

export default Main;