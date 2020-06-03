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
            tag: '',
            errorMessage:''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var token = localStorage.getItem('FBIdToken');
        var loggedin = localStorage.getItem('loggedin');
        console.log(token);
        const postData = {
          title: this.state.title,
          body: this.state.body,
          tag: this.state.tag
        };
        console.log(this.state.tag);
        axios.post("/post",postData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }})
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
        if (loggedin===false)
        {this.props.history.push('/Login');}
        else
        {this.props.history.push('/');}
        
    };
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    render() {
        return (
            <div style={style.backgroundDiv}>
                { this.state.errorMessage && (<h3 className="error"> { this.state.errorMessage } </h3>)}
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
                    <select id="tag"
                        name="tag"
                        type="tag"
                        label="Tag"
                        value = {this.state.tag}
                        onChange={this.handleChange}
                        >
                        <option value= "gardening">Gardening</option>
                        <option value= "baking">Baking</option>
                        <option value = "mask">Masks</option>
                        <option value = "other">Other</option>
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

/*class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            post: "",
            tags: [],
            toContact: false
        };
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
    }

    handlePostChange = e => {
        this.setState({ post: e.target.value });
    }

    // handleTagsChange = e => {
    //     let tags = e.target.value.split(', ');
    //     console.log(e.target);
    //     console.log(tags);
    //     this.setState({tags: tags});
    // }

    submitForm = () => {
        this.setState({ toContact: true });
    }
    render() {
        if (this.state.toContact === true) {
            return <Redirect to='/Projects' />
        }
        return (
            <div style={style.backgroundDiv}>
                <form
                    action="https://secure-headland-45260.herokuapp.com/"
                    method="POST"
                    id="form"
                //onSubmit={() => this.submitForm}
                >
                    <div style={style.title}><h3>Title:</h3></div>
                    {/* <input
                        type="text"
                        placeholder="title"
                        name="postTitle"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    /> }
                    <textarea
                        form="form" //the form it belongs to
                        placeholder="title"
                        onChange={this.handleTitleChange}
                        name="postTitle" //backend stuff plz don't remove
                        value={this.state.title}
                        style={{ width: "500px" }}
                    />
                    <div style={style.title}><h3 >Post:</h3></div>
                    {/* <input
                    type="text"
                    placeholder="start writing your post here"
                    name="postDescription"
                    value={this.state.post}
                    onChange={this.handlePostChange}
                    style={{ width: "500px", height: "500px", textAlign: "flex-start" }}
                /> }
                    <textarea
                        form="form"
                        placeholder="start writing your post here"
                        onChange={this.handlePostChange}
                        name="postDescription"
                        value={this.state.post}
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
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}*/

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

