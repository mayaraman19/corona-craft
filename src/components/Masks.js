import React from 'react'
import axios from 'axios'
import MiniProj from './MiniProj.js'

class Masks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maskProjects: [],
        }
    }
    getData = () => {
        axios.get('http://localhost:5000/projects')
        .then((response) => {
            console.log(response.data);
            this.setState({maskProjects: response.data});
        });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
<<<<<<< HEAD
        let oldProjs = this.state.maskProjects.filter((val) => {
            if(val.tag == "masks") return true;
            else return false;
        })
        let projs = oldProjs.map((val, index) => {
            return <MiniProj
                key={index}
                title={val.postTitle}
                description={val.postDescription}
            />
        });
        console.log(projs);
        if (projs.length == 0) {
            return (
                <h3>
                    Sorry, no mask projects right now.
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
=======
        let projs = this.state.maskProjects.map((val, index) => {
            if(val.tag=="masks") {
                return <MiniProj
                    key={index}
                    title={val.postTitle}
                    description={val.postDescription}
                    />
            }
            else return null;
        });
        return (
            <div>
                <h1 className='project-page'>Masks</h1>                
                {projs}
            </div>
        )

>>>>>>> cee62d9... added some headers
    }
    
}

export default Masks