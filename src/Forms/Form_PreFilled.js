import React, { Component } from 'react';
// This one show how to prefill a form with Values.
class Form_PreFilled extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName : "Mehtab",
            lastName : "Akram"
        }
    }
    handleOnchange = ({target})=>{
        this.setState({
            [target.name]:target.value
        })
    }
    handleOnSubmit = (e)=>{
        e.perventDefault();
        console.log(`FirstName = ${this.state.firstName},LastName = ${this.state.lastName}`);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type = "text" name ="firstName" defaultValue = {this.state.firstName} onChange = {this.handleOnchange}/>
                    <input type = "text" name ="lastName" defaultValue = {this.state.lastName} onChange = {this.handleOnchange}/>
                    <input type = "submit" />
                </form>
            </div>
        );
    }
}

export default Form_PreFilled;