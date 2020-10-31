import React from 'react'
import Prototypes from 'prop-types'
import { hot } from 'react-hot-loader';
function Link({ filter, children, setVisibilityFilter, active }) {
    return (

        <button disabled={active} onClick={() => setVisibilityFilter(filter)}> { children}</button>
    )
}
Link.propTypes = {
    filter: Prototypes.string.isRequired,
    children: Prototypes.node.isRequired,
    setVisibilityFilter: Prototypes.func.isRequired,
    active: Prototypes.bool.isRequired

}
export default hot(module)(Link)
