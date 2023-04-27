import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FormTareas from "../components/FormTareas";
import ListTareas from "../components/ListTareas";


function Tareas() {
  /*
  useEffect(()=>{
    fetch(windows.$api + '/tareas')
    .then(result => {
      // la funcion de abajolo guarda en el store (en state, sería setTareas)
      addTareas(result.tareas)
    })
  }, [])
  */

  return (

    <Container>
      <h1 className="text-center">Pantalla de Tareas</h1>
      <Row>
        <Col xs='5' className='p-4 bg-secondary'>
          <FormTareas />
        </Col>
        <Col xs='7' className='p-3 bg-warning'>
          <ListTareas />
        </Col>
      </Row>
    </Container>

  );
}

export default Tareas;