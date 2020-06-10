import React from 'react'
import {NavLink} from 'react';
import axios from 'axios'
import MiniProj from './MiniProj';
import ProjectsNavBar from './ProjectsNavBar.js'
import Projects from './Projects';
import Grid from '@material-ui/core/Grid';
import Post from './Posts.js'

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
        if (bakingProjs.length == 0) {
            return (
                <h3>
                   Sorry, no baking projects right now.
               </h3>
               
           );
        }
        else{
            let Projs = bakingProjs
            ?(bakingProjs.map((post) => (
            <Post key={post.postId} post={post} />
            ))
            )
            :<p>Sorry, no baking projects right now.</p>
            return (
            <div>
            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                {Projs}
                </Grid>
            </Grid>
            </div>
        )
        }
    }
    
}

export default Baking