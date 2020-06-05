import React, { Component } from 'react';
import axios from 'axios';
import MiniProj from './MiniProj.js'


class Other extends React.Component {
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

        // axios.get('https://us-central1-corona-craft-2dfcb.cloudfunctions.net/api/posts')
        //     .then((res) => {
        //         console.log(res.data);
        //         this.setState({ posts: res.data });
        //     });
        axios.get('/posts')
            .then((res) => {
                console.log(res.data);
                this.setState({ posts: res.data });
            });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        let otherProjs = this.state.posts.filter((val) => {
            if (val.tag.toString().toLowerCase() == "other") return true;
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
        let projFiltered = otherProjs.map((val, index) => {
            if (this.state.inputValue 
                && ((val.postTitle && val.postTitle.toLowerCase().includes(this.state.inputValue.toLowerCase())) 
                || (val.postDescription && val.postDescription.toLowerCase().includes(this.state.inputValue.toLowerCase()))))
                return <MiniProj
                    key={index}
                    title={val.postTitle}
                    description={val.postDescription}
                />
        });

        if (projs.length == 0) {
            return (
                <h3>
                    Sorry, no other projects right now.
                </h3>
            );
        }
        else if (this.state.isSearching === true) {
            return (
                <div>
                    <div style={{ float: 'right' }}>
                        <p style={{ whiteSpace: "pre-line" }}>
                            <label htmlFor="search"> Search by name </label>
                            <input type="text" value={this.props.inputValue} onChange={this.handleChange} />
                            <button onClick={() => this.setState({ isSearching: true })}>Search</button>
                        </p>

                    </div>

                    <div style = {{ height: 500, overflow: 'scroll' }}>
                        {projFiltered}
                    </div>
                    <div>
                        <button onClick={() => this.setState({ isSearching: false })}>
                            See all posts
                                    </button>
                    </div>
                </div >
            );
        }
        else {
            return (
                <div>
                    <div style={{ float: 'right' }}>
                        <p style={{ whiteSpace: "pre-line" }}>
                            <label htmlFor="search"> search by name </label>
                            <input type="text" value={this.props.inputValue} onChange={this.handleChange} />
                            <button onClick={() => this.setState({ isSearching: true })}>search</button>
                        </p>
                    </div>

                    <div style={{ height: 500, overflow: 'scroll' }}>
                        {projs}
                    </div>
                </div >
            );
        }
    }
}
export default Other;