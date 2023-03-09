import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Link</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bloques">Bloques de Colores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saludar/Mario">Saludar a Mario</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saludar/Luigi">Saludar a Luigi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saludar/Ana">Saludar a Ana</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;