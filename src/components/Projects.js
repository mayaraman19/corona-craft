import React from 'react'
<<<<<<< HEAD
import MiniProj from './MiniProj.js';


function Projects(){
    return(
        <div style={styles.content}>
            <h1 style={styles.titleStyle} >Some Home Crafting Projects!</h1>
            <MiniProj title="DIY Toilet Paper!"
                description="How to make your own toilet paper."
            />
            <MiniProj title="Bread!" description="How to make your own bread."/>

=======
import { Link } from "react-router-dom";
import ProjectsNavBar from './ProjectsNavBar';
import NavBar from './NavBar';
import {Route} from 'react-router-dom';
import Baking from './Baking'
import Masks from './Masks'
import Gardening from './Gardening'

function Projects() {
    return (
        <div className='project-page'>
            <h1>Some Home Crafting Projects!</h1>
            <Link to="/CreatePost"> Write a post!</Link>
            <ProjectsNavBar />
            <div className='projects'>
                <Route exact path="/Projects/Baking" component={Baking}/>
                <Route exact path="/Projects/Masks" component={Masks}/>
                <Route exact path="/Projects/Gardening" component={Gardening}/>
            </div>
>>>>>>> 9a7916c15da251020225f87af97fa48a331b7c6f
        </div>
    );
}

<<<<<<< HEAD
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
=======
export default Projects;
>>>>>>> 9a7916c15da251020225f87af97fa48a331b7c6f
