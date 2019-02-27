import React, { Component } from 'react';

import './Person.css';

class Person extends Component {

  changePerson = () =>{
    console.log("from Person");
    this.props.updatePerson();
  }

  render() {
    
    const {id,name,email,updatePerson, children} = this.props;
    const divId = "person-"+id;


    return (
      <div className="Person" id= {divId}  >
        <button onClick={this.changePerson}>Modify</button>
        <span>name: {name}</span>
        <span>email: {email}</span>
        <span>{children}</span>
      </div>
    );
  }
}

export default Person;
