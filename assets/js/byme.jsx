import React from 'react';
import {Card, CardBody, CardHeader, CardTitle, CardFooter} from 'reactstrap';

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
  </Card>)
}

export default function ByMe(params) {
  let tasks = _.map(params.tasks, (tt) => <Task key={tt.id} task={tt} />);
  return(<div>{tasks}</div>)
}
