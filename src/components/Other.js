import React, { Component } from 'react';
import axios from 'axios';
import MiniProj from './MiniProj.js'

import Grid from '@material-ui/core/Grid';

import Post from './Posts.js'

class Other extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isSearching: false,
            inputValue: ""
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
        let otherProjs = this.state.posts.filter((val) => {
            if(val.tag.toString().toLowerCase() == "other") return true;
            else return false;
        })
        if (otherProjs.length == 0) {
            return (
                <h3>
                   Sorry, no other projects right now.
               </h3>
               
           );
        }
        else{
        let Projs = otherProjs
        ?(otherProjs.map((post) => (
          <Post key={post.postId} post={post} />
        ))
        )
        :<p style={{marginTop: 100}}>Sorry, no other projects right now.</p>
        return (
        <div>
        <Grid container spacing={1} style={{backgroundColor: 'purple'}}>
            <Grid container item spacing={3}>
              {Projs}
            </Grid>
        </Grid>
        </div>
        )
        }
    }
    
}

export default Other;
