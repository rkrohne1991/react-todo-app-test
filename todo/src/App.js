import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import { useAlert } from 'react-alert';
import update from 'immutability-helper';

export class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://jsonplaceholder.typicode.com/todos'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        const data = result.slice(0, 10);
        this.setState({data: data})
      })
  }

  removeTask = (index, completed) => {
    if (completed) {
      const { data } = this.state;
      this.setState({
        data: data.filter((task, i) => {
            return i !== index;
        }),
      })
    } else {
      // const alert = useAlert();    
      // return <div>{alert.show('You can only remove completed tasks!')}</div>
    }
  }

  setDone = (index, row) => {
    if (row.completed === false) {
      const { data } = this.state;
      row.completed = true;

      let items = {...this.state.data};
      let item = {...items[index - 1]};
      item.completed = true;
      items[index - 1] = item;
      this.setState({items});

    } else {
      // const alert = useAlert();    
      // return <div>{alert.show('You can only set uncompleted tasks!')}</div>
    }
  }

  handleSubmit = (task) => {
    const { data } = this.state;
    if (data.length !== 10) {
      data.map((text, index, {length}) => {
        if (index + 1 === length) {
          let newID = length + 1;
          task.id = newID;
        }
      });
      this.setState({ data: [...this.state.data, task] })
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <Table taskData={ data } removeTask={ this.removeTask } setDone={ this.setDone } />
        <Form handleSubmit={ this.handleSubmit } />
      </div>
    )
  }
}

export default App