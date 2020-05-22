import React from 'react'
import { Link, NavLink } from "react-router-dom";
import ProjectsNavBar from './ProjectsNavBar';
import NavBar from './NavBar';
import {Route, Router, Switch} from 'react-router-dom';
import Baking from './Baking'
import Masks from './Masks'
import Gardening from './Gardening'
import Form from './Form';

function Projects() {

    return (
        <div className='project-page'>
            <h1>Some Home Crafting Projects!</h1>
            <ul>
            {/* <li><NavLink to="/Projects/WriteForm"> Write a Post!</NavLink></li> */}
            <NavLink to="/Projects/CreatePost" className="form"> Write a post!</NavLink>
            <ProjectsNavBar />
            </ul>
            <div className='projects'>
                <Switch>
                    <Route path="/Projects/CreatePost" className="form" component={Form}/>
                    <Route path="/Projects/Baking" component={Baking}/>
                    <Route path="/Projects/Masks" component={Masks}/>
                    <Route path="/Projects/Gardening" component={Gardening}/>
                </Switch>
            </div>
        </div>
    );
}

export default Projects;
