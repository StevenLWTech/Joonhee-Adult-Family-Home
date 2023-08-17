import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/common/Nav';
import Nav2 from './components/common/Nav2';
import Footer from './components/common/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav2/>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
