import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ToDo from './components/ToDo'


function App() {
  return (
  <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/todo' element={<ToDo/>} />
        </Routes>
      </Router>
  </>
  
  );
}

export default App;
