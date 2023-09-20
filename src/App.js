import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Nav2 from './components/common/Nav2';
import Footer from './components/common/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
    <div className="App">

      <Nav2/>

      <Routes>
        
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/gallery" exact element={<Gallery />} />
      </Routes>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
