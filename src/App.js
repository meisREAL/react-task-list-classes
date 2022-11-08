import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          task: ''
        }
      ]
    };
  }

  onChange = (e) => {
    this.setState({
      task: e.target.value
    });
  }

  // onClick = (e) => {
  //   e.preventDefault();
  //   const tasks = this.state.tasks
  //   const task = this.state.task
  //   this.setState({
  //     tasks: tasks.concat(task),
  //     task: ''
  //   });
  //   console.log(tasks)

  // }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.tasks.task}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="SUBMIT"
            onClick={this.onClick}
          />
        </div>
      </div>
    )
  }
}

export default App
