import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'



class ProjectsNavBar extends Component{
    render(){
        return (
            <ul className="projects">
                <li><NavLink to="/Projects/Baking">Baking</NavLink></li>
                <li><NavLink to="/Projects/Masks" activeClassName="active"> Masks</NavLink></li>
                <li><NavLink to="/Projects/Gardening" activeClassName="active"> Gardening</NavLink></li>
            </ul>
        );
    }
}

export default ProjectsNavBar