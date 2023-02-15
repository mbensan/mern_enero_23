// SCOPPING
const nombre = 'Pedro'

function saludar(name) {
  const nombre = name
  function saludos (name) {
    const the_name = name
    console.log("Hola " + the_name)
  }
  saludos('Diego')
}

saludar('Maria')

// FLECHA GORDA (ARROW FUNCTIONS)
function cubo (num) {
  return num ** 3
}

const cubo2 = num => num ** 3

const cantidades = [4, 2, 3, 6, 12]

const cubos = cantidades.map(cubo)

console.log(cubos)

function puedeBeber (edad) {
  if (edad >= 18) {
    return 'Si puede beber'
  } else {
    return 'no puede beber'
  }
}
const puedeBeber2 = edad => {
  if (edad >= 18) {
    return 'Si puede beber'
  }
  return 'no puede beber'
}

// Forma Original
function ninjaBelt (ninja) {
  return function belt (beltColor) { //tenga en cuenta el cierre aquí!
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
  }
}
// Forma de Flecha Gorda
const ninjaBelt2 = ninja =>
  beltColor => 
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.")
// Usando la función ninjaBelt2
ninjaBelt2('Nick')('Negro')




