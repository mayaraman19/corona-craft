// import React from "react";
// import { Redirect } from 'react-router-dom'

// class CreatePost extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: "",
//             title: "",
//             post: "",
//             tags: [],
//             toContact: false
//         };
//     }

//     handleTitleChange = e => {
//         this.setState({ title: e.target.value });
//     }

//     handlePostChange = e => {
//         this.setState({ post: e.target.value });
//     }

//     handleTagsChange = e => {

//     }

//     submitForm = () => {
//         this.setState({ toContact: true });
//     }
//     render() {
//         if (this.state.toContact === true) {
//             return <Redirect to='/Projects' />
//         }
//         return (
//             <div>
//                 <h3>Title:</h3>
//                 <input
//                     type="text"
//                     placeholder="title"
//                     value={this.state.title}
//                     onChange={this.handleTitleChange}
//                 />
//                 <h3>Post:</h3>
//                 <input
//                     type="text"
//                     placeholder="start writing your post here"
//                     value={this.state.post}
//                     onChange={this.handlePostChange}
//                     style={{ width: "500px", height: "500px", textAlign: "flex-start" }}

//                 />
//                 <br></br>
//                 <br></br>
//                 <button
//                     onClick={this.submitForm}
//                 >
//                     Submit
//             </button>
//             </div>

//         );
//     }
// }

// export default CreatePost;