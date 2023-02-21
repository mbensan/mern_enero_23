import { Component } from "react";

class BotonPrecio extends Component {

  render() { 
    const precio = this.props.precio

    function comprar () {
      alert('¿Desea comprar a $'+ precio +' pesos?')
    }

    function auch () {
      console.log("AUCH!!!")
    }

    return (
      <button type="button" className="btn btn-primary" onClick={comprar} onMouseOver={auch}>$ {precio} </button>
    );
  }
}
 
export default BotonPrecio;