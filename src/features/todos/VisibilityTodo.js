
import { connect } from 'react-redux'
import { visibilityfilters } from '../filters/filterSlice'
import TodoList from './TodoList'
import { createSelector } from '@reduxjs/toolkit'
import { updateTodoList } from './todoSlice'
const selectTodos = state => state.todoreducer
const selectFilter = state => state.filtertodo

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
      
    switch (filter) {
      case visibilityfilters.SHOW_ALL:
        return todos
      case visibilityfilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case visibilityfilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
)

const mapStateToProps = state => ({
  todos: selectVisibleTodos(state)
})

const mapdispatchtoprops = { updateTodoList }
export default connect(mapStateToProps, mapdispatchtoprops)(TodoList)