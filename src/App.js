import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Viewdata from './components/Viewdata';
import Adddata from './components/Adddata';
import Editdata from './components/Editdata';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Viewdata/>}/>
        <Route path='/add' element={<Adddata/>}/>
        <Route path='/edit' element={<Editdata/>}/>
      </Routes>
    </div>
  );
}

export default App;
