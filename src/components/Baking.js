import React from 'react'
import axios from 'axios'
import MiniProj from './MiniProj';

class Baking extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bakingProjects: [],
        }
    }
    getData = () => {
        axios.get('http://localhost:5000/projects')
        .then((response) => {
            console.log(response.data);
            this.setState({bakingProjects: response.data});
        });
    }
    componentDidMount() {
        this.getData();
    }
    render(){
<<<<<<< HEAD
        let oldProjs = this.state.bakingProjects.filter((val) => {
            if(val.tag == "baking") return true;
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
                    Sorry, no baking projects right now.
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
        let projs = this.state.bakingProjects.map((val, index) => {
            if(val.tag=="baking") {
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
                <h1 className='project-page'>Baking</h1>                
                {projs}
            </div>
        );
>>>>>>> cee62d9... added some headers
    }
    
}

export default Baking