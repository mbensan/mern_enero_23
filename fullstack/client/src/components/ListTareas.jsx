import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

// importamos el almacén de datos
import { useStore } from "../store";

function ListTareas() {
  const tareas= useStore(state => state.tareas)

  return (
    <section>
      <h3>Lista de Tareas</h3>
      <ListGroup>
        {tareas.map(tarea => 
          <ListGroup.Item key={tarea.text}>{tarea.text}</ListGroup.Item>
        )}
      </ListGroup>
    </section>
  );
}

export default ListTareas;