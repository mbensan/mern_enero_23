import {create} from 'zustand'

const store = (set) => ({
  // acá defino mi almacén (mis datos, y la forma de modificar mis datos)
  tareas: [
    {
      text: 'Comprar salmón',
      complete: false
    },
    {
      text: 'Arreglar frenos del auto',
      complete: true
    }
  ],
  addTarea: text => {
    const newTarea = {
      text: text,
      complete: false
    }
    set(state => {
      const newTareas = [...state.tareas, newTarea]
      return {
        tareas: newTareas
      }
    })
  },
  addTareas: tareasArr => {
    set(state => {
      return {
        tareas:  tareasArr
      }
    })
  }
})

export const useStore = create(store)
