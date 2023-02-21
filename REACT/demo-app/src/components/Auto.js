import './Auto.css';

import { Component } from "react";
import BotonPrecio from "./BotonPrecio";

class Auto extends Component {
  
  render() { 
    // desestructuramos las props que nos llegan
    const {img, title, price} = this.props

    return (
      <div className="card">
        <img src={img} className="card-img-top" alt="auto" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <BotonPrecio precio={price} />
        </div>
      </div>
    );
  }
}

export default Auto;