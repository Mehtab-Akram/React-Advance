import React, { Component } from 'react';
// This one shows how we can use single method to handle multiple events. 
class Events extends Component {
    constructor(props){
        super(props);
        
    }
    handleClick = (Event)=>{
        switch(Event.type){
            case("click"):
            {
                console.log(`Single Click`);
                break;
            }
            case("dblClick"):{
                console.log(`Double Click`);
                break;
            }
            case("hover"):{
                console.log(`Hover`);
                break;
            }
            default:
                console.log(`Dont Know.`)
        }
    }
    render() {
        return (
            <div>
                <button
                onClick = {this.handleClick}
                onDoubleClick = {this.handleClick}
                >Click Me!</button>
            </div>
        );
    }
}

export default Events;