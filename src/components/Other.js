import React, { Component } from 'react';
import axios from 'axios';
import MiniProj from './MiniProj.js'

class Other extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    getData = () => {
        var token = localStorage.getItem('FBIdToken');
        var loggedin = localStorage.getItem('loggedin');
        axios.get('https://us-central1-corona-craft-2dfcb.cloudfunctions.net/api/posts')
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
        let projs = otherProjs.map((val, index) => {
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
                    Sorry, no other projects right now.
                </h3>
            );
        }
        else {
            return (
                <div style={{height: 500, overflow: 'scroll'}}>
                    {projs}
                </div>
            );
        }
    }
    
}
export default Other;