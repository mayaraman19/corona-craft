import React from 'react'

function Info(){
    return (
        <dev>
            <p>Developed by: Alex Ginella, Maya Raman, Damini Kaushik and Michelle Gunawan</p>
            <p>Copyright CoronaCraft 2020 LLC.</p>
        </dev>
    )
}

function About(){
    return(
        <div className='about-page'>
            <h1>About</h1>
            <ul style={{marginLeft:200, marginRight:200}}>
                <li>Post DIY crafts to help the figt against Corona virus</li>
                <li>Get inspiration for your DIY crafts by browsing through featured posts on our Home page and posts by other users on our Projects page</li>
                <li>Support the community by voting for other posts so that the most popular post will be seen first</li>
                <li>Happy Crafting!</li>
            </ul>
            <p style={{marginLeft:200, marginRight:200, fontSize:10, color: 'white'}}>Note: Only users who are logged in will be able to create posts and vote</p>
            <br></br>   
            
            <Info/>
        </div>
    );
}

export default About;