import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
const schema = {
    type : 'object',
    properties :{
        firstName : {type :'string',default:'Mehtab',title :"First Name "},
        lastName : {type :'string',default:'Kashmiri',title :"Last Name "}
    }
}

class Json_Schema extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : "",
            lastName : ""
        }
    }
    handleOnSubmit = (formData)=>{
        console.log({formData})
    }
    render() {
        return (
            <div>
                <Form schema = {schema} onSubmit = {this.handleOnSubmit}/>
            </div>
        );
    }
}

export default Json_Schema;