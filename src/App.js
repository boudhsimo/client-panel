import React, { useState } from 'react';
import Person from './components/PersonComponent/Person';
import './App.css';

var app = (props) =>  {
  
  const [personState, setPersonState ] = useState({
    girls:[
    {id:1, name:"mohammed", email:"heh@yopmail.com", text:"Dev Java"},
    {id:2, name:"azize", email:"azize@gmail.com" , text:"DevOps"},
    {id:3, name:"amine", email:"amine@outlook.com" , text:"Dev React"}],
    boys:[{id:4, name:"khalid", email:"khalid@hotmail.com" , text:"Dev Hybris"},
    {id:5, name:"houssin", email:"houssin@nestle.com" , text:"Front End"}]
  });

  const updatePersonHander = ()=>{
    console.log("from App")
    setPersonState({boys:[{id:9, name:"houssin", email:"houssin@nestle.com" , text:"Front End"}],girls:[{id:9, name:"houssin", email:"houssin@nestle.com" , text:"Front End"}]});
  }

  return (
    <div className="App">
        {personState.boys.map((p)=> 
        <div className="boys">
        <Person key={p.id} id={p.id} name={p.name} 
                  email={p.email} updatePerson={updatePersonHander}>
            {p.text}
          </Person>
          </div>
        )}
    
        {personState.girls.map((p)=> 
          <div className="girls">
          <Person key={p.id} id={p.id} name={p.name} 
                  email={p.email} updatePerson={updatePersonHander}>
            {p.text}
          </Person>
          </div>
        )}
    </div>
  );
}

export default app;
