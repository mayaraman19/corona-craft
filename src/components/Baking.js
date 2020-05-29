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
                {projs}
            </div>
        );
    }
    
}

export default Baking