import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'



class ProjectsNavBar extends Component{
    render(){
        return (
            <ul class="projects">
                <li><NavLink to="/Baking">Baking</NavLink></li>
                <li><NavLink to="/Masks" activeClassName="active"> Masks</NavLink></li>
                <li><NavLink to="/Gardening" activeClassName="active"> Gardening</NavLink></li>
            </ul>
        );
    }
}

export default ProjectsNavBar