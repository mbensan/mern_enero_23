import './App.css';
import RegisterForm from './components/RegisterForm';
import RegisterFormValidated from './components/RegisterFormValidated';
import Colors from './components/Colors';
import Navtab from './components/Navtab';
import Personajes from './components/Personajes';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="item1">
          <Navtab />
        </div>
        <div className="item2">
          <Colors />
        </div>
        <div className="item3">
          <RegisterForm title="Registrese acá" />
        </div>  
        <div className="item4">
          <RegisterFormValidated title="Registro con validación" />
        </div>
        <div className="item5">
          <Personajes />
        </div>
      </div>
    </div>
  );
}

export default App;
