import React from 'react'
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div>
            <h1>Some Home Crafting Projects!</h1>
            <Link to="/CreatePost"> Write a post!</Link>
            <div className = "projects">
                <Link to="/Baking">Baking</Link>
                <Link to="/Masks"> Masks</Link>
                <Link to="/Baking"> Gardening</Link>
            </div>
        </div>
    );
}

export default Projects;