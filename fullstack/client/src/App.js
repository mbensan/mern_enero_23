import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Main from './views/Main';
import PersonDetail from './views/PersonDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/detail' element={<PersonDetail />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
