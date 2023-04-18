// ADT => Tipo de datos abstractos []
/*
Lista : {
  largo(),
  tipo(),
  agregar(cosa),
  quitar(posicion),
  ordenar(),
  imprimir()
}
*/

class Nodo {
  constructor(valor, sgte) {
    this.valor = valor
    this.sgte = sgte
  }
}

class Lista {
  constructor() {
    this.primero = null
  }

  agregar (cosa) {
    if (this.primero == null) {
      this.primero = new Nodo(cosa, null)
    }
    else {
      const antiguoPrimero = this.primero
      this.primero = new Nodo(cosa, antiguoPrimero)
    }
  }
}

const miLista = new Lista()
miLista.agregar('chao')
miLista.agregar(43)
miLista.agregar(true)
miLista.agregar('Bonjour')
