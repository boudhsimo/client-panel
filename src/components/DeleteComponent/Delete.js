import React, {Component} from 'react';
import "./Delete.css"

class DeletePerson extends Component {

    buttonId = "personId-"+this.props.id;

    render(){
        return <i id="buttonId" className="delete-person-button far fa-trash-alt" onClick={ this.deletePersonHandler.bind(this,this.props.id) }></i>;
    }


    deletePersonHandler = (id)=>{
        console.log(id);
        this.props.deletePersonHandler(id);
    }

}
export default DeletePerson;



