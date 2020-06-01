import React from 'react'
import {NavLink} from 'react';
import axios from 'axios'
import MiniProj from './MiniProj';
import ProjectsNavBar from './ProjectsNavBar.js'
import Projects from './Projects';

class Baking extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bakingProjects: [],
        }
    }
    getData = () => {
        axios.get('https://secure-headland-45260.herokuapp.com/')
        .then((response) => {
            console.log(response.data);
            this.setState({bakingProjects: response.data});
        });
    }
    componentDidMount() {
        this.getData();
    }
    render(){
        let oldProjs = this.state.bakingProjects.filter((val) => {
            if(val.tag == "baking") return true;
            else return false;
        })
        let projs = oldProjs.map((val, index) => {
            return <MiniProj
                key={index}
                title={val.postTitle}
                description={val.postDescription}
                tag={val.tag}
                />
        });
        if (projs.length == 0) {
            return (
                 <h3>
                    Sorry, no baking projects right now.
                </h3>
                
            );
        }
        else {
            return (
                <div>
                    {projs}
                </div>
            );
        }
    }
    
}

export default Baking