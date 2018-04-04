import React from 'react';
import {Button, Card, CardBody, CardHeader, CardTitle, CardFooter} from 'reactstrap';
import {Link, BrowserRouter as Router, Route } from 'react-router-dom';

function Task(params) {
  let task = params.task;
  return(<Card>
    <CardTitle>
      <div>
      {task.title}
    </div>
    </CardTitle>
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
  </Card>)
}

export default function ByMe(params) {
  let tasks = _.map(params.tasks, (tt) => <Task key={tt.id} task={tt} />);
  return(<div>{tasks}</div>)
}
