import React from 'react'
import Todo from './Todo'
function TodoList({ todos, updateTodoList }) {
    return (
        <ul>
            {
                todos.map(todo => (
                    <Todo  key={todo.id} {...todo} onClick={() => updateTodoList(todo.id)}></Todo>
                ))
            }
        </ul>
    )
}
export default TodoList
