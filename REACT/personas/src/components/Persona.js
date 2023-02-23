import { Component } from "react";

class Persona extends Component {

  // Esta es la forma de tomar una(s) prop(s) y pasarla al estado interno de un componente
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
      hairColor: this.props.hairColor
    };
  }

  render() {
    // desestructurar propiedades
    const { firstName, lastName, age, hairColor } = this.props

    return (
      <div className="persona">
        <h3>{lastName}, {firstName}</h3>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button className="boton-verde">Cumplir año</button>
      </div>
    );
  }

  componentDidMount () {
    const nombre = this.props.firstName + ' ' + this.props.lastName
    console.log("Se acaba de escribir el HTML de la persona " + nombre)
  }
}

export default Persona;