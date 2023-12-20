import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registerimg from './Components/Registerimg';
import Loginimg from './Components/Loginimg';
import HomePage from './Components/HomePage'
import { Route, Routes } from 'react-router-dom';
import Singlepage from './Components/Singlepage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route path='/' element={<Loginimg/>}/>
      <Route path='/Reg' element={<Registerimg />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/single/:id' element={<Singlepage />} />
    </Routes>

    </>
  );
}

export default App;
