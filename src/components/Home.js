<<<<<<< HEAD
import React from 'react'
=======
import React, { Component } from 'react'
import TopPosts from './MiniProj'
import MiniProj from './MiniProj';
>>>>>>> 9a7916c15da251020225f87af97fa48a331b7c6f

function Greeting(){
    return (
        <div>
            <p>Hello! Welcome to CoronaCraft</p>
            <p>the site where we help you craft to survive corona</p>
<<<<<<< HEAD
            <p> ... </p>
=======
>>>>>>> 9a7916c15da251020225f87af97fa48a331b7c6f
        </div>
    );
}

<<<<<<< HEAD
function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <Greeting/>
        </div>
    );
=======
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
>>>>>>> 9a7916c15da251020225f87af97fa48a331b7c6f
}

export default Home;