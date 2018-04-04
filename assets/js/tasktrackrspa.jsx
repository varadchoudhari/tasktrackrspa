import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import Nav from './nav';
import ByMe from './byme';
import Assigned from './assigned';
import PostForm from './post-form';
import EditForm from './edit-form';

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
      <div><h1>TaskTrackr</h1></div>
      <Nav />
      <Route path="/byme" exact={true} render={() => <ByMe tasks={params.tasks}/>} />
      <Route path="/assigned" exact={true} render={() => <Assigned />} />
      <Route path="/new" exact={true} render={() => <PostForm users={params.users}/>} />
      <Route name="edit" path="/edit/:task_id" render={(taskid) => <EditForm users={params.users} taskid={taskid.match.params.task_id} tasks={params.tasks}/>} />
      </div>
  </Router>)
});
