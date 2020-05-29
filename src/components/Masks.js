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
                {projs}
            </div>
        )

    }
    
}

export default Masks