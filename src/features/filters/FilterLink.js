import { connect } from 'react-redux'
import {setVisibilityFilter} from './filterSlice'
import Link from './Link'
const mapstatetoprops = (state, ownprops) => {
    return {
        active: state.filtertodo === ownprops.filter
    }
}
const mapdispatchtostate ={setVisibilityFilter}

export default connect( mapstatetoprops,mapdispatchtostate)(Link)
