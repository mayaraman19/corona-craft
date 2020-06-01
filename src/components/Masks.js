import React from 'react'
import axios from 'axios'
import MiniProj from './MiniProj.js'

class Masks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maskProjects: [],
            scrapedProjects: []
        }
    }
    getData = () => {
        axios.get('http://localhost:5000/projects')
        .then((response) => {
            console.log(response.data);
            this.setState({maskProjects: response.data});
        });
    }


    //welp turns out you cant do this on server side so i might
    //have to do this in the server repo
    scrapeWeb() {
        //all these objects need to have prop tag: "masks"
        //make an array of scraped objects here
        //still need to maybe get descriptions??
        let posts = [{tag: "masks", postTitle: "testScrapedtitle"}] 

        this.setState({
            scrapedProjects: posts
        });
    }

    componentDidMount() {
        //this.scrapeWeb();
        this.getData();
    }
    render() {
        let oldProjs = this.state.maskProjects.filter((val) => {
            if(val.tag == "masks") return true;
            else return false;
        })
        oldProjs = oldProjs.concat(this.state.scrapedProjects)
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
    }
    
}

export default Masks