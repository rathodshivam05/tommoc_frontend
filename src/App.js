import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
