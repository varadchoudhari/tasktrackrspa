import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button, ButtonGroup, Input, FormGroup, Form, NavItem} from 'reactstrap';
import {connect} from 'react-redux';
import api from './api';

let Session = connect(({token}) => {
  return {token};
})((props) => {
  function logout() {
    props.dispatch({
      type: "LOGOUT",
    });
  }
  return <div className="navbar-text">
    Welcome {props.current[0].name}!&nbsp;|&nbsp;
    <NavLink to="/" onClick={logout}>Logout</NavLink>
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
    let current = params.users.filter((user) => {
      return user.id == params.token.user_id
    })
    session_info = <Session current={current}/>
  }
  else {
    session_info = <LoginForm />
  }
  return(
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <span className="navbar-brand">
        <NavLink to="/" exact={true}>TaskTrackr</NavLink>
      </span>
      <ul className="navbar-nav mr-auto">
    <NavItem>
        <NavLink to='/byme' exact={true} activeClassName="active" className="nav-link">Created Task</NavLink>
        </NavItem>
        <NavItem>
        <NavLink to='/assigned' exact={true} activeClassName="active" className="nav-link">Assigned Task</NavLink>
        </NavItem>
        <NavItem>
        <NavLink to='/new' exact={true} activeClassName="active" className="nav-link">Add Task</NavLink>
        </NavItem>
    </ul>
    {session_info}
  </nav>
    );
  }

  function state2props(state) {
    return {token: state.token}
  }

  export default connect(state2props)(Nav);
