import './App.css';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Footer from './components/Footer'
import Next from './components/LandingInfo'
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav2/>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
