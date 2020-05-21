import React from 'react'
import { Link } from "react-router-dom";
import ProjectsNavBar from './ProjectsNavBar';
import NavBar from './NavBar';
import {Route} from 'react-router-dom';
import Baking from './Baking'
import Masks from './Masks'
import Gardening from './Gardening'

function Projects() {
    return (
        <div className='project-page'>
            <h1>Some Home Crafting Projects!</h1>
            <Link to="/CreatePost"> Write a post!</Link>
            <ProjectsNavBar />
            <div className='projects'>
                <Route exact path="/Projects/Baking" component={Baking}/>
                <Route exact path="/Projects/Masks" component={Masks}/>
                <Route exact path="/Projects/Gardening" component={Gardening}/>
            </div>
        </div>
    );
}

export default Projects;