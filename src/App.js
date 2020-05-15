import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Projects from './Projects'
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/Projects" component={Projects}/>
    </div>
  );
}

export default App;
