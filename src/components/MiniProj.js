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
            <a href={props.link} style={styles.description}>
                {props.description}
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
        height: 300,
        width: 300,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        display: 'inline-block',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        height: 30,
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