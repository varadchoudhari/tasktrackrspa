import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import api from './api';

function EditForm(params) {
  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    if (tgt.attr("name") === "completed") {
      data["completed"] = ev.target.checked;
      let action = {
        type: 'UPDATE_FORM',
        data: data,
      }
      params.dispatch(action)
    }
    else if (tgt.attr("name") === "time_taken") {
        data[tgt.attr("name")] = Math.round(parseInt(tgt.val()) / 15) * 15;
        let action = {
          type: 'UPDATE_FORM',
          data: data,
        }
        params.dispatch(action)
    }
    else {
    data[tgt.attr("name")] = tgt.val();
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    }
    params.dispatch(action)
  }
  }

  function submit() {
    let toSend = {}
    if(params.form.user_id != "") {toSend.user_id = params.form.user_id}
    if(params.form.title != "") {toSend.title = params.form.title}
    if(params.form.body != "") {toSend.body = params.form.body}
    toSend.assigned_id = params.form.assigned_id
    toSend.completed = params.form.completed
    if(params.form.time_taken != "") {toSend.time_taken = params.form.time_taken}
    if (toSend != null) {
      toSend.id = params.taskid;
      api.updateTasks(toSend, params.taskid, params.token)}
  }

  function clear() {
    params.dispatch({type: "CLEAR_FORM"});
  }
  let users = _.map(params.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  let task = params.tasks.filter((task) => {
    return task.id == params.taskid
  })
  return <div style={ {padding: "4ex"} }>
    <h2>Update Task</h2>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" defaultValue={task[0].title} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for="body">Body</Label>
      <Input type="textarea" name="body" defaultValue={task[0].body} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for="assigned">Assigned</Label>
      <Input type="select" name="assigned_id" defaultValue={task[0].assigned.id} onChange={update}>
        <option>Select a user</option>
        {users}
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="completed">Completed</Label>
      <Input type="checkbox" name="completed" defaultChecked={task[0].completed} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for="time_taken">Time Taken</Label>
      <Input type="number" step="15" name="time_taken" defaultValue={task[0].time_taken} onChange={update}/>
    </FormGroup>
    <Button onClick={submit}>Update</Button>
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  return {
    form: state.form,
  }
}

export default connect(state2props)(EditForm);
