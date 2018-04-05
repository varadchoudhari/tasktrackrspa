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
    <span>by {task.user.name}</span>&nbsp; | &nbsp; <span>This task is assigned to {task.assigned.name}</span>&nbsp; | &nbsp; <span>Time taken: {task.time_taken}</span>&nbsp; | &nbsp; <span>Completed: {task.completed ? "Completed" : "Not Completed"}</span>
    </div>
    </CardTitle>
    </CardHeader>
    <CardBody>
      <div>
        {task.body}
      </div>
    </CardBody>
    <CardFooter>
      <Link taskid={task.id} to={"/edit/"+task.id}>
        EDIT
      </Link>
    </CardFooter>
  </Card>
  <div className="padding"></div>
</div>)
}

export default function ByMe(params) {
  let byMe = params.tasks.filter((task) => {
    return task.user.id == params.token
  })
  let tasks = _.map(byMe, (tt) => <Task key={tt.id} task={tt} />);
  return(
    <div>
      {tasks}
    </div>
  )
}
