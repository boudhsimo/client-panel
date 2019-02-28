import React, { Component } from 'react';
import Delete from '../DeleteComponent/Delete';

import './Person.css';

class Person extends Component {

  changePerson = () =>{
    console.log("from Person");
    this.props.updatePerson();
  }

  deletePerson = (id) => {
    this.props.deletePersonHandler(id);
  }

  render() {
    const {id,name,email,updatePerson, children, street, streetChangerHandler }= this.props;
    const divId = "person-"+id;
    return (
      <div className="Person" id= {divId}>
        <button onClick={this.changePerson}>Modify</button>
        <span>id: {id}</span>
        <span>name: {name}</span>
        <span>email: {email}</span>
        <span>{children}</span>
        <input onChange={streetChangerHandler} type="text" value={street}/> 
        <Delete id={id} deletePersonHandler={this.deletePerson.bind(this, id)} />
      </div>
    );
  }
}

export default Person;
