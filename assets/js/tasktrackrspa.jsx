import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import Nav from './nav';
import ByMe from './byme';
import Assigned from './assigned';
import PostForm from './post-form';
import EditForm from './edit-form';
import Feed from './feed';
import Register from './register'

export default function tasktrackrspa_init(root, store) {
  ReactDOM.render(
    <Provider store={store}>
    <Tasktrackrspa />
    </Provider>, root
    );
}

let Tasktrackrspa = connect((state) => state)((params) => {
    return(<Router>
      <div>
      <Nav users={params.users}/>
      <Route path="/" exact={true} render={() => {if (params.token != null) {return(<Feed tasks={params.tasks} token={params.token.user_id}/>)} else {return(<Register />)}}} />
      <Route path="/byme" exact={true} render={() => {if (params.token != null) {return(<ByMe tasks={params.tasks} token={params.token.user_id}/>)} else {return(<Register />)}}} />
      <Route path="/assigned" exact={true} render={() => {if (params.token !=null) {return(<Assigned tasks={params.tasks} token={params.token.user_id}/>)} else {return(<Register />)}}} />
      <Route path="/new" exact={true} render={() =>{if (params.token != null) {return(<PostForm users={params.users} token={params.token.user_id}/>)} else {return(<Register />)}}} />
      <Route name="edit" path="/edit/:task_id" render={(taskid) => <EditForm users={params.users} taskid={taskid.match.params.task_id} tasks={params.tasks} token={params.token.user_id}/>} />
      </div>
  </Router>)
});
