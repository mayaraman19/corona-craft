import React from 'react';
import logo from './components/logo.svg';
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import {Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar'
import About from './components/About';
import CreatePost from './components/CreatePost';
import Baking from './components/Baking'
import Masks from './components/Masks'
import Gardening from './components/Gardening'
import Form from './components/Form';


function App() {
  return (
    <div>
      <NavBar />
    <div className="App">
      <div className='content'>
        <Route exact path="/" component={Home}/>
        <div>
          <Route exact path="/Projects" component={Projects}/>
          <div className='projects'>
                <Route path="/Projects/CreatePost" component={CreatePost}/>
                <Route exact path="/Projects/Baking" component={Baking}/>
                <Route exact path="/Projects/Masks" component={Masks}/>
                <Route exact path="/Projects/Gardening" component={Gardening}/>
          </div>
        </div>
        <Route exact path="/About" component={About}/>
      </div>
    </div>
    </div>
  );
}

export default App;