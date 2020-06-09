import React, { Component } from 'react';
import axios from 'axios';
import MiniProj from './MiniProj.js'
import Grid from '@material-ui/core/Grid';

import Post from './Posts.js'

class Gardening extends React.Component{
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
        let gardProjs = this.state.posts.filter((val) => {
            if(val.tag.toString().toLowerCase() == "gardening") return true;
            else return false;
        })
        this.setState({posts: gardProjs})
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        let Projs = this.state.posts
        ?(this.state.posts.map((post) => (
          <Post key={post.postId} post={post} />
        ))
        )
        :<p>Loading...</p>
        return (
        <Grid container spacing={1}>
            <Grid container item spacing={3}>
              {Projs}
            </Grid>
        </Grid>
        )
    }
    
}
export default Gardening;