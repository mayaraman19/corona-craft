import React, { Component } from 'react'
import axios from 'axios';
import TopPosts from './MiniProj'
import MiniProj from './MiniProj';

function Greeting(){
    return (
        <div>
            <p>Hello! Welcome to CoronaCraft</p>
            <p>the site where we help you craft to survive corona</p>
        </div>
    );
}

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axios.get('http://localhost:5000/projects')
        .then((response) => {
            console.log(response.data);
            this.setState({projects: response.data});
        });
    }
    render(){
        let projs = this.state.projects.map((currentValue, index) => {
            console.log(currentValue.postTitle, currentValue.postDescription, index)
            return <MiniProj
                key={index}
                title={currentValue.postTitle}
                description={currentValue.postDescription}
            />
        });
        return(
            <div>
                <div className="home-page">
                    <h1>Home Page</h1>
                    <Greeting/>
                </div>
                <div className='featured-content'>
                    {projs}
                    <MiniProj title="Featured Posts" description="description"/>
                </div>
            </div>            
        );
    }
}

export default Home;