import React from 'react';
import {Link} from 'react';



function MiniProj(props) {
    if(props.link) {
        return(
            <div style={styles.block}>
                    <h2 style={styles.title}>
                    {props.title}
                    </h2>
                    <p style={styles.description}>{props.description}</p>
                    <a href={props.link} style = {styles.link}>
                        Link to Post
                    </a>
            
            {/* <h3 style={styles.description}>
                {props.description}
            </h3> */}
        </div>

        );
    }
    else{
    return(
        <div style={styles.block}>
            <h2 style={styles.title}>
                {props.title}
            </h2>
            <h3 style={styles.description}>
                {props.description}
            </h3>
        </div>

    );
    }


};

const styles = {
    block: {
        backgroundColor: 'antiquewhite',
        height: 300,
        width: 300,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        display: 'inline-block',
        overflow: 'scroll',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        //height: 40,
        width: 300,
        fontSize: 20,
        color: 'black',
        float: 'left',
        //left: '50%',
    },
    description: {
        fontSize: 15,
        //height: 200,
        width: 300,
        float: 'left',
        color: 'grey',
    },
    link: {
        fontSize: 15,
        //height: 200,
        width: 300,
        float: 'left',
        color: 'blue',
    },

};


export default MiniProj;