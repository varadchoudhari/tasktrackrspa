import React from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup} from 'reactstrap';

export default function Nav(params) {
  return(
    <ButtonGroup>
        <Link to='/byme' exact={true}><Button color="secondary">Created Tasks</Button></Link>
        <Link to='/assigned' exact={true}><Button color="secondary">Assigned Tasks</Button></Link>
        <Link to='/new' exact={true}><Button color="primary">Add Task</Button></Link>
    </ButtonGroup>
    );
  }
