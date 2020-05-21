import React, {Component} from 'react'

class TopPosts extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='content-block'>
                <div style={styles.block}>
                    <h2 style={styles.title}>
                        {this.props.title}
                    </h2>
                    <h3 style={styles.description}>
                        {this.props.description}
                    </h3>
                </div>
            </div>
        );        
    }
};

const styles = {
    block: {
        backgroundColor: 'white',
        height: 400,
        width: 400,
        borderRadius: 10,
    },

    title: {
        fontSize: 20,
        color: 'black',
        left: '50%',
    },
};

export default TopPosts