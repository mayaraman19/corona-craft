import React from 'react'
import { NavLink } from 'react';
import axios from 'axios'
import MiniProj from './MiniProj';
import ProjectsNavBar from './ProjectsNavBar.js'
import Projects from './Projects';
import Grid from '@material-ui/core/Grid';
import Post from './Posts.js'

class Baking extends React.Component {
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
                this.setState({ posts: res.data });
            });
    }
    componentDidMount() {
        this.getData();
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        let bakingProjs = this.state.posts.filter((val) => {
            if (val.tag.toString().toLowerCase() == "baking") return true;
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

// import React from 'react'
// import axios from 'axios'
// import MiniProj from './MiniProj';
// import { valueToNode } from '@babel/types';

// class Baking extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             bakingProjects: [],
//             filteredPosts: [],
//             isSearching: false,
//             inputValue: ""
//         }
//     }
//     getData = () => {
//         axios.get('http://localhost:5000/projects')
//             .then((response) => {
//                 console.log(response.data);
//                 this.setState({ bakingProjects: response.data });
//             });
//     }
//     componentDidMount() {
//         this.getData();
//     }

//     takeInput = (event) => {
//         this.setState({ isSearching: true, inputValue: event.target.value });
//     }

//     handleChange = (e) => {
//         this.setState({ inputValue: e.target.value })
//     }

//     filterPosts = () => {
//         console.log("pee pee poo poo");
//         console.log(this.state.inputValue);
//         let oldProjs = this.state.bakingProjects.filter((val) => {
//             if (val.tag == "baking") return true;
//             else return false;
//         })
//         let projs = oldProjs.map((val, index) => {
//             if (val.postTitle.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
//                 val.postDescription.toLowerCase().includes(this.state.inputValue.toLowerCase()))
//                 return <MiniProj
//                     key={index}
//                     title={val.postTitle}
//                     description={val.postDescription}
//                 />
//         });
//         return projs;
//     }


//     render() {
//         let oldProjs = this.state.bakingProjects.filter((val) => {
//             if (val.tag == "baking") return true;
//             else return false;
//         })
//         let projs = oldProjs.map((val, index) => {
//             return <MiniProj
//                 key={index}
//                 title={val.postTitle}
//                 description={val.postDescription}
//             />
//         });
//         let projFiltered = oldProjs.map((val, index) => {
//             console.log(this.state.inputValue)
//             if (val.postTitle.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
//                 val.postDescription.toLowerCase().includes(this.state.inputValue.toLowerCase()))
//                 return <MiniProj
//                     key={index}
//                     title={val.postTitle}
//                     description={val.postDescription}
//                 />
//             console.log("you fucker");
//         });

//         if (projs.length == 0) {
//             return (
//                 <h3>
//                     Sorry, no baking projects right now.
//                 </h3>
//             );
//         }
//         else if (this.state.isSearching === true) {
//             return (
//                 <div>
//                     <div style={{ float: 'right' }}>
//                         <p style={{ whiteSpace: "pre-line" }}>
//                             <label htmlFor="search"> Search by name </label>
//                             <input type="text" value={this.props.inputValue} onChange={this.handleChange} />
//                             <button onClick={() => this.setState({ isSearching: true })}>Search</button>
//                         </p>

//                     </div>

//                     <div>
//                         {projFiltered}
//                     </div>
//                     <div>
//                         <button onClick={() => this.setState({ isSearching: false })}>
//                             See all posts
//                         </button>
//                     </div>
//                 </div >
//             );
//         }
//         else {
//             return (
//                 <div>
//                     <div style={{ float: 'right' }}>
//                         <p style={{ whiteSpace: "pre-line" }}>
//                             <label htmlFor="search"> search by name </label>
//                             <input type="text" value={this.props.inputValue} onChange={this.handleChange} />
//                             <button onClick={() => this.setState({ isSearching: true })}>search</button>
//                         </p>
//                     </div>

//                     <div>
//                         {projs}
//                     </div>
//                 </div >
//             );
//         }
//     }

// }

// export default Baking