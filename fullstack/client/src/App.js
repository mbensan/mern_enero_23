import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';

import Main from './views/Main';
import PersonDetail from './views/PersonDetail';
import Update from './views/Update';
import Tareas from './views/Tareas';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/tareas">Tareas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/detail/:id' element={<PersonDetail />}></Route>
            <Route path='/edit/:_id' element={<Update />}></Route>
            <Route path='/tareas' element={<Tareas />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
