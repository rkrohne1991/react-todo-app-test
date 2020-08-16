import React, {Component} from 'react';
import styled from 'styled-components';

class Form extends Component {
  initialState = {
    userId: 1,
    id: '',
    title: '',
    completed: '',
  };

  state = this.initialState

  handleChange = (event) => {
    let {name, value } = event.target

    if (name === "completed") {
      value = Boolean(value);
    }
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
  }

  render() {
    const Button = styled.button`
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid #4cae4c;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      user-select: none;
      color: #fff;
      background-color: #5cb85c;
    `;

    const { title, completed } = this.state;
  
    return (
      <form>
        <label htmlFor="title">Task</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange} />
        <label htmlFor="completion">Completion</label>
        <select
          name="completed"
          id="completed"
          value={completed}
          onChange={this.handleChange}>
          <option>Please Select...</option>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      <Button as="input" type="button" value="Submit" onClick={this.submitForm}></Button>
      </form>
    );
  }
}

export default Form;
