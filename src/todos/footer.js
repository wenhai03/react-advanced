import React from 'react'

function Footer (props) {
  const {todos, removeCompleted} = props
  const unCompleted = todos.filter(item => !item.completed)
  const completed = todos.filter(item => item.completed)
  
  return (
    <footer style={{display: todos.length > 0 ? "block" : "none"}}>
      <a
        id="clear-completed"
        style={{display: completed.length > 0 ? "block" : "none"}}
        onClick={removeCompleted}
      >
        Clear {completed.length} completed item
      </a>
      <div id="todo-count">{unCompleted.length} items left</div>
    </footer>)
}

export default Footer
