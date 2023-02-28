import { useState } from "react";
import Input from "./Input";
import List from "./List";

function Wrapper () {

  const words = ['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react',
    'javascript', 'redux', 'biblioteca', 'gato', 'canario', 'automovil', 'autolavado',
    'perro']

  const [filter, setFilter] = useState("")

  function filtrar_items () {
    const items = []

    for (let word of words) {
      if (word.indexOf(filter) > -1) {
        items.push(word)
      }
    }
    return items
  }
  
  return (
    <div>
      <Input setFilter={setFilter} />
      <List filter={filter} items={filtrar_items()} />
    </div>
  );
}

export default Wrapper;