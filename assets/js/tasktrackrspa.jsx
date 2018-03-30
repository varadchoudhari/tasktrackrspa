import React from 'react';
import ReactDOM from 'react-dom';

export default function tasktrackrspa_init(root) {
  ReactDOM.render(<Tasktrackrspa />, root);
}

class Tasktrackrspa extends React.Component {
  render() {
    return(<div>This is tasktrackr React</div>)
  }
}
