import React from 'react';

<<<<<<< HEAD
=======


>>>>>>> 9a7916c15da251020225f87af97fa48a331b7c6f
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
<<<<<<< HEAD
        height: 200,
        width: 200,
        borderRadius: 30,
=======
        height: 400,
        width: 400,
        borderRadius: 10,
>>>>>>> 9a7916c15da251020225f87af97fa48a331b7c6f
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