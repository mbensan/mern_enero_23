import './App.css';
import MisPlatos from './components/MisPlatos';
import Auto from './components/Auto';
import Navbar from './components/Navbar';

function App () {
  return (
    <div className="App">
      <Navbar>
        <p className='text-success'>Gracias por todo!</p>
      </Navbar>
      <header className="App-header">
        <p>
          Editemos el archivo <code>src/App.js</code> para ver los cambios.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <MisPlatos />
            </div>
            <div className="col-4">
              <Auto img="https://img.motoryracing.com/noticias/portada/25000/25024-n.jpg" title="Fiat 600" price={800} />        
            </div>
            <div className="col-4">
              <Auto img="https://upload.wikimedia.org/wikipedia/commons/9/93/BMW_Isetta_-_Flickr_-_mick_-_Lumix.jpg" title="BMW Izetta" price={4500} />        
            </div>
          </div>
        </div>
      </header>
      <div id='footer'>Yo no soy el padre</div>
    </div>
  );
}

export default App;
