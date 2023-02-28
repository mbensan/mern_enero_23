import './App.css';
import Counter from './components/Counter';
import Wrapper from './components/Wrapper';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <div className="App">

      <div className="grid-container">
        <div className="item1">
          <CreateForm />
        </div>
        <div className="item2">Menu</div>
        <div className="item3">
          <Wrapper />
        </div>  
        <div className="item4">
          <Counter title="Este es un contador" />
        </div>
        <div className="item5">Footer</div>
      </div>

    </div>
  );
}

export default App;
