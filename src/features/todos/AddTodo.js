import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodoList } from './todoSlice'
import PropTypes from 'prop-types'
function AddTodo({ addTodoList }) {
    const [todo, settodo] = useState('')

    return (
        <div>
            <form>
                <div className="row">
                    Add todo
                    <input type='text' value={todo} onChange={(e) => {
                        settodo(e.target.value)
                    }} />

                </div>
                <div className="row">
                    <button onClick={(e) => {
                        e.preventDefault();
                        if (!todo.trim()) {
                            return;
                        }
                        addTodoList(todo)
                        settodo('')
                    }
                    }>Add Todo</button>
                </div>
            </form>

        </div >
    )
}
AddTodo.prototype={
    addTodoList: PropTypes.func.isRequired
}
const mapdispatchtoprops = { addTodoList }
export default connect(null, mapdispatchtoprops)(AddTodo)
