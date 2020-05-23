import React from 'react'
import { Link, NavLink } from "react-router-dom";
import ProjectsNavBar from './ProjectsNavBar';
import NavBar from './NavBar';
import {Route, Router, Switch} from 'react-router-dom';
import Baking from './Baking'
import Masks from './Masks'
import Gardening from './Gardening'
import Form from './Form';
import CreatePost from './CreatePost';

function Projects() {

    return (
        <div className='project-page'>
            <h1>Some Home Crafting Projects!</h1>
            <ul>
            <NavLink to="/Projects/CreatePost" className="form"> Write a post!</NavLink>
            <ProjectsNavBar />
            </ul>
             
        </div>
    );
}

export default Projects;
