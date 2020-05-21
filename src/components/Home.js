import React, { Component } from 'react'
import TopPosts from './TopPosts'

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
            <div className="body">
                <h1>Home Page</h1>
                <Greeting/>
                <div className='featured-content'>
                    <TopPosts title="Featured Posts" description="description"/>
                </div>
            </div>
            
        );
    }
}

export default Home;