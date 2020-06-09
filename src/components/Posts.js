import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
//import dayjs from 'dayjs';
//import relativeTime from 'dayjs/plugin/relativeTime';

//MUI stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import axios from 'axios';

const styles = {
    card: {
        backgroundColor: 'antiquewhite',
        height: 300,
        width: 300,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        display: 'inline-block',
        overflow: 'scroll',
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    image:{
        minWidth: 200,

    },
    conent:{
        padding:25,
        objectFit:'cover'
    },
    vote:{
        display: 'inline-block',
        align: 'middle',
        margin: 3,
    },
}
class Post extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            voteCount: props.voteCount,
            postId: props.postId,
            i:0
        }
    }

    render(){
        //dayjs.extend(relativeTime);
        var token = localStorage.getItem('FBIdToken');
        var loggedin=localStorage.getItem('loggedin');
        const{classes, post: {body, createdAt, title, userHandle, postId, voteCount, commentCount}} = this.props

        return(
        <Card className={classes.card}>
                {/* <cardMedia 
                image={userImage}
                title="Profile image"
          className={classes.image}
        /> */}
        <CardContent className={classes.content}>
          <Typography variant="h5" color="textSecondary">{title}</Typography>
          <Typography variant="body4" color="textSecondary">By {userHandle}</Typography>
          <p></p>
          <button  className={classes.vote} onClick={() => 
          {
            if(loggedin=='true' && this.state.i<1)
            {this.setState({i:this.state.i+1})}

            axios.get(`https://us-central1-corona-craft-2dfcb.cloudfunctions.net/api/post/${postId}/upvote`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }})}}>upvote</button>
            <p className={classes.vote}>{voteCount+this.state.i}</p>
          <button className={classes.vote} onClick={() => 
          {
            if(loggedin=='true' && this.state.i>-1)
            {this.setState({i:this.state.i-1})}
            
            axios.get(`https://us-central1-corona-craft-2dfcb.cloudfunctions.net/api/post/${postId}/downvote`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }})}}>downvote</button>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
        </Card>
        )
    }
}

export default withStyles(styles)(Post);