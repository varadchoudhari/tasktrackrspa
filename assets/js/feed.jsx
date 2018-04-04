import React from 'react';
import {Button, Card, CardBody, CardHeader, CardTitle, CardFooter} from 'reactstrap';
import {Link, BrowserRouter as Router, Route } from 'react-router-dom';

function Task(params) {
  let task = params.task;
  return(
    <div>
    <Card>
    <CardHeader>
    <CardTitle>
      <div>
        <h1>
      {task.title}
    </h1>
    <span>by {task.user.name}</span>&nbsp; | &nbsp; <span>This task is assigned to {task.assigned.name}</span>
    </div>
    </CardTitle>
    </CardHeader>
    <CardBody>
      <div>
        {task.body}
      </div>
    </CardBody>
    <CardFooter>
      {params.token === task.user.id || params.token === task.assigned.id ?
      <Link taskid={task.id} to={"/edit/"+task.id}>
        EDIT
      </Link>
      :
      <div></div>
    }
    </CardFooter>
  </Card>
  <div className="padding"></div>
</div>)
}

export default function Feed(params) {
  let tasks = _.map(params.tasks, (tt) => <Task key={tt.id} task={tt} token={params.token}/>);
  return(<div>{tasks}</div>)
}
