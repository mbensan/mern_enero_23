const { faker } = require('@faker-js/faker');


function crear_con_animal () {
  const calle1 = faker.address.streetName()
  const calle2 = faker.address.streetName()

  const animal = faker.animal.type()

  return {
    calle1,
    calle2,
    animal
  }
}

function crear_con_banda  () {
  const calle1 = faker.address.streetName()
  const calle2 = faker.address.streetName()

  const banda = faker.music.genre()

  const objeto = {
    calle1,
    calle2,
    banda
  }
}

module.exports = {
  crear_con_animal,
  crear_con_banda
}