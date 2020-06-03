import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'



class ProjectsNavBar extends Component{
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            data:[],
            filteredData:[]
        };
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      getData = () => {
        fetch(`http://localhost:4000/restaurants`)
          .then(response => response.json())
          .then(data => {
            const { query } = this.state;
            const filteredData = data.filter(element => {
              return element.name.toLowerCase().includes(query.toLowerCase());
            });
    
            this.setState({
              data,
              filteredData
            });
          });
      };

    render(){
        return (
            <ul className="projects">
                <li><NavLink to="/Projects/Baking">Baking</NavLink></li>
                <li><NavLink to="/Projects/Masks" activeClassName="active"> Masks</NavLink></li>
                <li><NavLink to="/Projects/Gardening" activeClassName="active"> Gardening</NavLink></li>
                <form><input 
                placeholder="search tags" 
                name="searchQuery"
                value = {this.state.searchQuery}
                onChange={this.handleChange}>

                </input></form>
            </ul>
        );
    }
}

export default ProjectsNavBar