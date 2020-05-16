import React from 'react'
import MiniProj from './MiniProj.js';


function Projects(){
    return(
        <div style={styles.content}>
            <h1 style={styles.titleStyle} >Some Home Crafting Projects!</h1>
            <MiniProj title="DIY Toilet Paper!"
                description="How to make your own toilet paper."
            />
            <MiniProj title="Bread!" description="How to make your own bread."/>

        </div>
    );
}

export default Projects;

const styles = {
    content: {
        margin: 30,
        display: 'inline-block',

    },
    titleStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
    },
};