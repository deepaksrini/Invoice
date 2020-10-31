import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const Itemslice = createSlice({
    name: 'Items',
    initialState: [
        { itemId: 1, name: 'Pen', cost: '10', discount: '10', createdAt: moment().calendar() },
        
        { itemId: 2, name: 'Book', cost: '20', discount: '100', createdAt: moment().calendar() },
        
        { itemId: 3, name: 'Pencil', cost: '40', discount: '20', createdAt: moment().calendar() },

    ],
    reducers: {
        AddItems: (state, action) => {
            let item = {
                itemId: state.length + 1,
                name: action.payload.name,
                cost: action.payload.cost,
                discount: action.payload.discount,
                createdAt: moment().calendar()
            }
            state.push(item)
        },
        EditItems: (state, actions) => {
            let index = state.findIndex(s => s.itemId === actions.payload.itemId);
            console.log(actions.payload, state)
            if (index > -1) {
                state[index].name = actions.payload.name;
                state[index].cost = actions.payload.cost;
                state[index].discount = actions.payload.discount;
            }
        },
        DeleteItems: (state, action) => {
            let index = state.findIndex(s => s.itemid === action.payload.itemId);
            state.pop(state[index]);
        }
    }
});
export const { AddItems, EditItems, DeleteItems } = Itemslice.actions;
export default Itemslice.reducer