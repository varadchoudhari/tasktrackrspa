import React from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';

export default function Register(params) {
  function register(ev) {
    ev.preventDefault();
  }
  return(<div className="w-50">
    <h2>New To TaskTrackr?, create a new account</h2>
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text"></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password"></Input>
      </FormGroup>
      <FormGroup>
        <Button onClick={register}>Register</Button>
      </FormGroup>
    </Form>
  </div>)
}
