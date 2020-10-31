import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const Productslice = createSlice({
    name: 'Products',
    initialState: [
        { id: 1, name: 'WaterCan', createdAt: moment().calendar() },
        { id: 2, name: 'Motarbike', createdAt: moment().calendar() },
        { id: 3, name: 'Van', createdAt: moment().calendar() }
    ],
    reducers: {
        AddProducts: (state, action) => {
            let item = {
                id: state.length + 1,
                name: action.payload.name,
                createdAt: moment().calendar()
            }
            state.push(item)
        },
        EditProducts: (state, actions) => {
            let index = state.findIndex(s => s.id === actions.payload.id);
            console.log(actions.payload, state)
            if (index > -1) {
                state[index].name = actions.payload.name;
            }
        },
        DeleteProducts: (state, action) => {
            let index = state.findIndex(s => s.id === action.payload.id);
            state.pop(state[index]);
        }
    }
});
export const { AddProducts, EditProducts, DeleteProducts } = Productslice.actions;
export default Productslice.reducer