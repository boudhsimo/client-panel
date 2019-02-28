import React from 'react';
import './AddPerson.css';

var addPerson = (props) => {
    const btnSuccess = "btn btn-success"
    const btnDanger = "btn btn-danger";
    const form = <div>
                    <div className="form-group">
                      <label htmlFor="exampleInputName">Name</label>
                      <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>;

    let className = props.showForm? btnDanger: btnSuccess;
    const button = <button onClick={props.showFormHandler} type="button" className={className}>Add new person</button>;

    return <div className="form"> {button} { props.showForm ? form:null} </div> ;
}

export default addPerson;