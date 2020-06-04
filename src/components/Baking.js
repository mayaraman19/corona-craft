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
            posts: [],
        }
    }
    getData = () => {
        var token = localStorage.getItem('FBIdToken');
        var loggedin = localStorage.getItem('loggedin');
        axios.get('/posts')
        .then((res) => {
            console.log(res.data);
            this.setState({posts: res.data});
        });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        let bakingProjs = this.state.posts.filter((val) => {
            if(val.tag.toString().toLowerCase() == "baking") return true;
            else return false;
        })
        let projs = bakingProjs.map((val, index) => {
            return <MiniProj
                key={index}
                title={val.title}
                description={val.body}
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