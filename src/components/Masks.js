import React from 'react'
import axios from 'axios'
import MiniProj from './MiniProj.js'

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
        let projs = maskProjs.map((val, index) => {
            return <MiniProj
                key={index}
                title={val.title}
                description={val.body}
                tag={val.tag}
                />
        });
        console.log(projs);
        if (projs.length == 0) {
            return (
                <h3>
                    Sorry, no mask projects right now.
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

export default Masks