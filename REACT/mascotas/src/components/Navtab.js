// componente de Pestañas
import { useState } from "react";

function Navtab() {
  const [links, setLinks] = useState([
    {
      text: 'Inicio',
      content: 'Bienvenido a nuestra página',
      selected: false
    },
    {
      text: 'Misión Visión',
      content: 'Somos una gran fundación',
      selected: true
    },
    {
      text: 'Nosotros',
      content: 'Conoce a nuestro equipo',
      selected: false
    },
    {
      text: 'Contacto',
      content: 'No nos llames porfa',
      selected: false
    }
  ])

  function seleccionarLink(indice_activo) {
    // selecciono el link de indice
    console.log('seleccionando el link de indice ' + indice_activo);
    const newLinks = links.map((link, ind_link) => 
      {
        return {
          text: link.text,
          content: link.content,
          selected: indice_activo === ind_link
        }
      }
    )
    setLinks(newLinks)
  }
  
  return (
    <div className="navtab">
      <div className="tabs">
        {links.map((link, indice) =>
          <button onClick={ ev => seleccionarLink(indice) } key={link.text} className={link.selected ? 'tab-item selected' : 'tab-item'}>
            {link.text}
          </button>
        )}
      </div>
      <div className="tab-view">
        {
          links.find(link => link.selected).content
        }
      </div>
    </div>
  );
}

export default Navtab;