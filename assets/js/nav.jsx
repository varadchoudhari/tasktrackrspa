import React from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Input, FormGroup, Form} from 'reactstrap';
import {connect} from 'react-redux';
import api from './api';

let Session = connect(({token}) => {
  return {token};
})((props) => {
  return <div className="navbar-text">
    User = {props.token.user_id}
  </div>
});

let LoginForm = connect(({login}) => {return {login};})((props) => {
  function update(ev) {
    let tgt = $(ev.target);
    let data = {}
    data[tgt.attr('name')] = tgt.val();
    props.dispatch({
      type: 'UPDATE_LOGIN_FORM',
      data: data,
    });
  }

  function create_token(ev) {
    ev.preventDefault();
    api.submitLogin(props.login)
  }
  return <div className="navbar-text">
    <Form inline>
      <FormGroup>
        <Input type="text" name="name" placeholder="name" value={props.login.name} onChange={update}/>
      </FormGroup>
      <FormGroup>
        <Input type="password" name="pass" placeholder="password" value={props.login.pass} onChange={update} />
      </FormGroup>
      <Button onClick={create_token}>Login</Button>
    </Form>
  </div>
});

function Nav(params) {
  let session_info;
  if (params.token) {
    session_info = <Session />
  }
  else {
    session_info = <LoginForm />
  }
  return(
    <div>
    <ButtonGroup>
        <Link to='/byme' exact={true}><Button color="secondary">Created Tasks</Button></Link>
        <Link to='/assigned' exact={true}><Button color="secondary">Assigned Tasks</Button></Link>
        <Link to='/new' exact={true}><Button color="primary">Add Task</Button></Link>
    </ButtonGroup>
    {session_info}
  </div>
    );
  }

  function state2props(state) {
    return {token: state.token}
  }

  export default connect(state2props)(Nav);
