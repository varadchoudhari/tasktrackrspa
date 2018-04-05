import React from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';
import { connect } from 'react-redux';
import api from './api';

function Register(params) {
  function register() {
    api.registerUser(params.register)
  }

  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr("name")] = tgt.val();
    let action = {
      type: 'ADD_USER',
      data: data,
    }
    params.dispatch(action)
  }
  console.log("params???", params.register)
  return(<div className="w-50">
    <h2>New To TaskTrackr?, create a new account</h2>
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input onChange={update} name="name" type="text"  value={params.register.name}/>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input onChange={update} name="pass" type="password"  value={params.register.pass}/>
      </FormGroup>
      <FormGroup>
        <Button onClick={register}>Register</Button>
      </FormGroup>
    </Form>
  </div>)
}

function state2props(state) {
  return {
    register: state.register,
  }
}

export default connect(state2props)(Register);
