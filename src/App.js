import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './views/Home';
import Contact from './views/About';


function App() {
  return (
    <Router>
    <div>
      <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Contact/>}/>
    </Routes>
      
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
