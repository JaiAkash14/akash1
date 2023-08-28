import akash from './one.1.jpg';
import jai from './three.3.jpg';
import mutton from './three.3.jpg';
import TextField from '@mui/material/TextField';
import './App.css';
import hari from './PayFlex.png';
import fish from './Group 15.png';
import dick from './gig.png';
import eat from './apple.png';
import { Visibility } from '@mui/icons-material';
import cat from './tap.png';
import Login from './Login';
import Register from './Register';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
function App() {
  return (


<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>

        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
