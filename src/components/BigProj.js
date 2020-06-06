import React from 'react';



class BigProj extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log(this.props);
        if(this.props.match.params.link) {
            return (
                <div style={{backgroundColor: 'antique-white'}}>
                    <h1 style={styles.text}>
                        {this.props.match.params.title}
                    </h1>
                    <h2 style={styles.text}>
                        {this.props.match.params.desc}
                    </h2>
                    <a href={this.props.match.params.link}>
                        Link to Post!
                    </a>
                </div>
            );
        }
        else
        return (
            <div style={{backgroundColor: 'antique-white'}}>
                <h1 style={styles.text}>
                {this.props.match.params.title}
                </h1>
                <h2 style={styles.text}>
                    {this.props.match.params.desc}
                </h2>
            </div>
        );
    }

}
const styles = {
    text: {
        color: 'black',
    },
}

export default BigProj;