import React from 'react';
import {Link} from 'react';



function MiniProj(props) {
    if(props.link) {
        return(
            <div style={styles.block}>
            <h2 style={styles.title}>
                {props.title}
            </h2>
            {/* <h3 style={styles.description}>
                {props.description}
            </h3> */}
            <p>{props.description}</p>
            <a href={props.link}>
                {props.link}
            </a>
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
        height: 1000,
        width: window,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: 'black',
        left: '50%',
    },
    description: {
        fontSize: 10,
        color: 'grey',
    },

};


export default MiniProj;