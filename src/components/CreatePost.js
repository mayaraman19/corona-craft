import React from "react";
import { Redirect } from 'react-router-dom'

class CreatePost extends React.Component {
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

    handleTagsChange = e => {

    }

    submitForm = () => {
        this.setState({ toContact: true });
    }
    render() {
        if (this.state.toContact === true) {
            return <Redirect to='/' />
        }
        return (
            <div style={style.backgroundDiv}>
                <div style={style.title}><h3>Title:</h3></div>
                <input
                    type="text"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <div style={style.title}><h3 >Post:</h3></div>
                <input
                    type="text"
                    placeholder="start writing your post here"
                    value={this.state.post}
                    onChange={this.handlePostChange}
                    style={{ width: "500px", height: "500px", textAlign: "flex-start" }}

                />
                <br></br>
                <br></br>
                <button
                    onClick={this.submitForm}
                >
                    Submit
            </button>
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

