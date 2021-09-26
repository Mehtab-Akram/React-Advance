import React, { Component } from 'react';
import Radium from 'radium';
import reactDom from 'react-dom';

const styles = {
    background : '#ff0000',
    width : 320,
    padding : 20,
    borderRadius : 5,
    border : 'none',
    outline : 'none',
    ':hover': {
        color : '#fff'
    },
    ':active':{
        position: 'relative',
        top: 2,
    },
    '@media (max-width: 480px)':{
        width : 160
    }
}
// For Media queryies to work we need to wrap the app.js component in <StyleRoot> element provided by Radium
class RadiumStyles extends Component {
    
    render() {
        return (
            <div>
                <button style = {styles}>Click me!</button>
            </div>
        );
    }
}

export default Radium(RadiumStyles);