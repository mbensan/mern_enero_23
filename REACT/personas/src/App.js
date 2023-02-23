import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Persona from './components/Persona';
import Interruptor from './components/Interruptor';

function App() {
  return (
    <div className="App">
      <Navbar title='Tarea: Apoyalo' className='mb-4' />
      <div className="container">
        <div className='row'>
          <div className='col-6'>
            <h2>Personas:</h2>
            <Persona firstName='Jane' lastName='Doe' age={45} hairColor='Black' />
            <Persona firstName='John' lastName='Smith' age={88} hairColor='Brown' />
            <Persona firstName='Juan' lastName='Perez' age={32} hairColor='Oscuro' />
            <Persona firstName='Maria' lastName='Smith' age={62} hairColor='Brown' />
          </div>
          <div className='col-6'>
            <Interruptor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
