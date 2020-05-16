import React from 'react';

function MiniProj(props) {
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


};

const styles = {
    block: {
        backgroundColor: 'antiquewhite',
        height: 200,
        width: 200,
        borderRadius: 30,
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