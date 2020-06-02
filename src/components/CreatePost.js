import React from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';
/*const api = axios.create({
    baseURL: 'https://us-central1-corona-craft-2dfcb.cloudfunctions.net/api'
})*/


class CreatePost extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
            //tags: [],
            submitted: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
          title: "Test Title",
          body: "Test Body from frontend"
        };
        axios.post("/post", postData)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
        this.setState({submitted:true})
    };
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    // handleTagsChange = e => {
    //     let tags = e.target.value.split(', ');
    //     console.log(e.target);
    //     console.log(tags);
    //     this.setState({tags: tags});
    // }

    render() {
        if (this.state.submitted === true) {
            return <Redirect to='/Projects' />
        }
        return (
            <div style={style.backgroundDiv}>
                <form  onSubmit={this.handleSubmit}>
                    <div style={style.title}><h3>Title:</h3></div>
                    <textarea
                        id="title"
                        name="title"
                        type="title"
                        label="Title"
                        value = {this.state.title}
                        onChange={this.handleChange}
                        placeholder="Post Title"
                        style={{ width: "500px" }}
                    />
                    <div style={style.title}><h3 >Post:</h3></div>
                    <textarea
                        id="body"
                        name="body"
                        type="body"
                        label="Body"
                        value = {this.state.body}
                        onChange={this.handleChange}
                        placeholder="start writing your post here"
                        style={{ width: "500px", height: "500px" }}
                    />
                    <div style={style.title}><h3 >Tags:</h3></div>
                    <select name="tag">
                        <option value="gardening">Gardening</option>
                        <option value="baking">Baking</option>
                        <option value="masks">Masks</option>
                        <option value="other">Other</option>
                    </select>
                    <br></br>
                    <br></br>
                    <button
                        id="submit"
                        type="submit"        
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

const style = {
    backgroundDiv: {
        flex: 1,
        backgroundColor: 'antiquewhite',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 230,
        marginRight: 230,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
    },
    title: {
        backgroundColor: 'lightblue',
        justify: 'center',
        paddingVertical: 30,
        marginLeft: '45%',
        width: 60,
        borderRadius: 10,
    }
}

export default CreatePost;

