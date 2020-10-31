import { prototype } from 'file-loader';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateTodoList } from './todoSlice'
import Proptotype from 'prop-types'
import './todo.css'

function Todo({ text, completed ,onClick}) {

    return (
        <li onClick={onClick} className={(completed ? 'underline' : '')} >{text}</li>
    )
}

export default Todo
