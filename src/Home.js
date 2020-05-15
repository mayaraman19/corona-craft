import React from 'react'

function Greeting(){
    return (
        <div>
            <p>Hello! Welcome to CoronaCraft</p>
            <p>the site where we help you craft to survive corona</p>
            <p> ... </p>
        </div>
    );
}

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <Greeting/>
        </div>
    );
}

export default Home;