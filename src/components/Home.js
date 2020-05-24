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

let projdata = [];

function getData() {
    axios.get('http://localhost:5000/projects')
    .then((response) => {
        // for(var i = 0; i < response.data.length; i++) {
        //     var title = response.data[i].postTitle;
        //     var description=response.data[i].postDescription;
        //     projs.push(<MiniProj title={title} description={description} />);
        //     console.log(response.data[i].postTitle);
        //     console.log(response.data[i].postDescription);
        // }
        projdata = response.data;
    });
}

function Projs() {
    getData();

    
}

class Home extends Component{
    
    render(){
        //this.getData();
        return(
            <div>
                <div className="home-page">
                    <h1>Home Page</h1>
                    <Greeting/>
                </div>
                <div className='featured-content'>
                    <MiniProj title="Featured Posts" description="description"/>
                </div>
            </div>            
        );
    }
}

export default Home;