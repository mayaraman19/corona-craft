import React from 'react';
import {NavLink} from 'react';
import {useHistory} from 'react-router-dom'
//import {browserHistory} from 'react-router';

// changePage = (title) => {
//     browserHistory.push(`/Projects/proj/${title}`)
// }



function MiniProj(props) {
    const history = useHistory();
    const onNavigateStatic = (title, description) => {
        history.push(`/Projects/proj/${title}/${description}`);
    }
    // const onNavigateLink = (title, description, link) => {
    //     history.push(`/Projects/proj/${title}/${description}/${link}`)
    // }
        if(props.link) {
            return(
                <div style={styles.block} 
                /*onClick={() => onNavigateLink(props.title, props.description, props.link)}*/>
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
        //let link = "Project/proj/" + props.title;
        return(
            <div style={styles.block} onClick={() => onNavigateStatic(props.title, props.description)}>
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
        height: 350,
        width: 350,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        display: 'inline-block',
        overflow: 'scroll',
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        //height: 40,
        width: 300,
        fontSize: 20,
        color: 'black',
        display: 'inline-block'
        //float: 'center',
        //left: '50%',
    },
    description: {
        fontSize: 15,
        //height: 200,
        width: 300,
        display: 'inline-block',
        //float: 'left',
        color: 'grey',
    },
    link: {
        fontSize: 15,
        //height: 200,
        display: 'inline-block',
        width: 300,
        //float: 'left',
        color: 'blue',
    },

};


export default MiniProj;