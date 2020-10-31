import React from 'react'
import FilterLink from './FilterLink'
import {visibilityfilters} from './filterSlice'

function Footer() {
    return (
        <div>
        <FilterLink filter={visibilityfilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={visibilityfilters.SHOW_COMPLETED} >Completed</FilterLink>
        <FilterLink filter={visibilityfilters.SHOW_ACTIVE}>Not Completed</FilterLink>
        </div>
    )
}

export default Footer
