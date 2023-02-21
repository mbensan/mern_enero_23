import './Navbar.css'
import { Component } from "react";

class Navbar extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;
