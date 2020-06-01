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
        axios.get('https://secure-headland-45260.herokuapp.com/')
        .then((response) => {
            console.log(response.data);
            this.setState({maskProjects: response.data});
        });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        let oldProjs = this.state.maskProjects.filter((val) => {
            if(val.tag == "masks") return true;
            else return false;
        })
        let projs = oldProjs.map((val, index) => {
            return <MiniProj
                key={index}
                title={val.postTitle}
                description={val.postDescription}
                tag={val.tag}
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
    }
    
}

export default Masks