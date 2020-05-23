import React, { Component } from 'react'
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
    render(){
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