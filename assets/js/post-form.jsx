import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import api from './api';

function PostForm(params) {
  function updateTitle(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr("name")] = tgt.val();
    if (data[tgt.attr("name")] === "") {
      console.log("Title cannot be null")
    }
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    }
    params.dispatch(action)
  }

  function updateBody(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr("name")] = tgt.val();
    if (data[tgt.attr("name")] === "") {
      console.log("Body cannot be null")
    }
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    }
    params.dispatch(action)
  }

  function updateAssigned(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr("name")] = tgt.val();
    if (data[tgt.attr("name")] === "") {
      console.log("Assigned cannot be null")
    }
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    }
    params.dispatch(action)
  }

  function submit() {
    api.submitTasks(params.form, params.token)
    clear()
  }

  function clear() {
    params.dispatch({type: "CLEAR_FORM"});
  }
  let users = _.map(params.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  return <div style={ {padding: "4ex"} }>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" value={params.form.title} onChange={updateTitle}/>
    </FormGroup>
    <FormGroup>
      <Label for="body">Body</Label>
      <Input type="textarea" name="body" value={params.form.body} onChange={updateBody}/>
    </FormGroup>
    <FormGroup>
      <Label for="assigned">Assigned</Label>
      <Input type="select" name="assigned_id" value={params.form.assigned_id} onChange={updateAssigned}>
        <option>Select a user</option>
        {users}
      </Input>
    </FormGroup>
    <Button onClick={submit}>Create</Button>
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  return {
    form: state.form,
  }
}

export default connect(state2props)(PostForm);
