import React from 'react'
import axios from 'axios'
import MiniProj from './MiniProj.js'
import Grid from '@material-ui/core/Grid';
import Post from './Posts.js'


class Masks extends React.Component {
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
        let maskProjs = this.state.posts.filter((val) => {
            if(val.tag.toString().toLowerCase() == "masks") return true;
            else return false;
        })
        if (maskProjs.length == 0) {
            return (
                <h3>
                   Sorry, no mask projects right now.
               </h3>
               
           );
        }
        else{
        let Projs = maskProjs
        ?(maskProjs.map((post) => (
          <Post key={post.postId} post={post} />
        ))
        )
        :<p>Sorry, no mask projects right now.</p>
        return (
        <Grid container spacing={1}>
            <Grid container item spacing={3}>
              {Projs}
            </Grid>
        </Grid>
        )
        }
    }
    
    
}

export default Masks