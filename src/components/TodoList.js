import React, { Component } from 'react'
import TodosContainer from '../container/TodosContainer'
import TodoInputContainer from '../container/TodoInputContainer.js';
import CheckboxContainer from '../container/CheckboxContainer';

export default class TodoList extends Component {
  
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <TodosContainer/>
        <CheckboxContainer/>
      </div>
      
    )
  } 
}