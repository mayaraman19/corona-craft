import React from 'react';
import logo from './components/logo.svg';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import {Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar'
import About from './components/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/About" component={About}/>
      </div>
    </div>
  );
}

export default App;