import React from 'react'

function Info(){
    return (
        <dev>
            <p>Developed by: Alex Ginella, Maya Raman, Damini Kaushik and Michelle Gunawan</p>
            <p>Copyright CoronaCraft 2020 LLC.</p>
            <p>...</p>
        </dev>
    )
}

function About(){
    return(
        <div className='about-page'>
            <h1>About</h1>
            <Info/>
        </div>
    );
}

export default About;