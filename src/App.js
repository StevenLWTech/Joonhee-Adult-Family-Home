// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Landing/>
      <Routes>
      <Route path ="/" exact component={Home}/>
      <Route path ="/books"/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
