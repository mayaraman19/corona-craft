import React from 'react'
import axios from 'axios'
import MiniProj from './MiniProj.js'

class Gardening extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gardProjects: [],
        }
    }
    getData = () => {
        axios.get('http://localhost:5000/projects')
        .then((response) => {
            console.log(response.data);
            this.setState({gardProjects: response.data});
        });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        let oldProjs = this.state.gardProjects.filter((val) => {
            if(val.tag == "gardening") return true;
            else return false;
        })
        let projs = oldProjs.map((val, index) => {
            return <MiniProj
                key={index}
                title={val.postTitle}
                description={val.postDescription}
                />
        });
        if (projs.length == 0) {
            return (
                <h3>
                    Sorry, no gardening projects right now.
                </h3>
            );
        }
        else {
            return (
                <div>
                    {projs}
                </div>
            );
        }
    }
    
}

export default Gardening