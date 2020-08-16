import React, { Component } from 'react';
import styled from 'styled-components';

const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>UserId</th>
        <th>Task</th>
        <th>Completion</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const ButtonDelete = styled.button`
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid #d43f3a;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      user-select: none;
      color: #fff;
      background-color: #d9534f;
      margin-right: 5px;
    `;

    const ButtonDone = styled.button`
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

    const rows = props.taskData.map((row, index) => {
      return (
        <tr key={ index }>
          <td>{ row.id }</td>
          <td>{ Capitalize(row.title) }</td>
          <td>{ Capitalize(String(row.completed)) }</td>
          <td>
              <ButtonDelete as="button" onClick={() => props.removeTask(index, row.completed)}>Delete</ButtonDelete>
              <ButtonDone as="button" onClick={() => props.setDone(index, row)}>Mark as Done!</ButtonDone>
          </td>
        </tr>
      )
    })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { taskData, removeTask, setDone } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody taskData={ taskData } removeTask={ removeTask } setDone={ setDone } />
      </table>
    )
  }
}

export default Table