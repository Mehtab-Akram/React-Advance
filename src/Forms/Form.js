import React, { Component } from 'react';
// This one shows how we can use a single on change handler to capture all the field values and save them to state.
// How amazing.
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName :"",
            lastName : ""
        }
    }
    handleOnChange =({target})=>{
        this.setState({
            [target.name] : target.value
        })
    }
    handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log(`First Name = ${this.state.firstName},Last Name = ${this.state.lastName}`)
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handleOnSubmit}>
                    <input type="text" name = "firstName" onChange = {this.handleOnChange}/>
                    <input type="text" name = "lastName" onChange = {this.handleOnChange}/>
                    <input Type = "submit"/>
                </form>
            </div>
        );
    }
}

export default Form;