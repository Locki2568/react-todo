import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        { todos.filter(todo =>{
          if(todo.status === "active" && this.props.isCompleted)
            return false
          return true
          })
          .map((todo, i) => {
          if(todo.status ==="completed"){
            return <li onClick={() => this.props.handleClick(todo)} 
            style={{ textDecorationLine: 'line-through' }} key={i}>
            {todo.content}
            </li>
          }
          else{
            return <li onClick={() => this.props.handleClick(todo)} key={i}>{todo.content}
            </li>
          }
          })}
          
      </div>
    )
  }
}