import React, { Component } from 'react';
import Person from './components/PersonComponent/Person';
import AddPerson from './components/AddPersonComponent/AddPerson';
import './App.css';

class App extends Component {

  state = {
    persons:[
      {id:1, name:"mohammed", email:"heh@yopmail.com", text:"Dev Java"},
      {id:2, name:"azize", email:"azize@gmail.com" , text:"DevOps"},
      {id:3, name:"amine", email:"amine@outlook.com" , text:"Dev React"},
      {id:4, name:"khalid", email:"khalid@hotmail.com" , text:"Dev Hybris"},
      {id:5, name:"houssin", email:"houssin@nestle.com" , text:"Front End"}
    ],
    street:"Old Traford",
    showForm:false
  };
  
  updatePerson = ()=>{
    console.log("from App")
    this.setState({persons:[{id:9, name:"houssin", email:"houssin@nestle.com" , text:"Front End"}]});
    console.log(this.state)
  }

  showFormHandler = () => {
    this.setState({showForm: !this.state.showForm})
  }

  deletePerson = (id) => {
    let persons = this.state.persons;
    persons = persons.filter((p)=> p.id !==id);
    this.setState({persons:persons});
  }

  changeStreet = (event) => {
    this.setState(
      {street:event.target.value}
    );
  }

  render() {
    return (
      <div className="App">
          <span >{this.state.street}</span>
          <AddPerson showFormHandler={this.showFormHandler} showForm={this.state.showForm}/>
          {this.state.persons.map((p)=> 
            <Person key={p.id} id={p.id} name={p.name} street={this.state.street} streetChangerHandler={this.changeStreet}
                    email={p.email} updatePerson={this.updatePerson} deletePersonHandler = {this.deletePerson.bind(this, p.id)}>
              {p.text}
            </Person>
          )}
      </div>
    );
  }
}

export default App;
