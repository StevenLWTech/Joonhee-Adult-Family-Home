// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Example from './components/Example';
import Landing from './components/Landing'
import Next from './components/next'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      {/* <Example/> */}
      <Landing/>
      <Next/>
      <Routes>
      <Route path ="/" exact component={Home}/>
      <Route path ="/books"/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
