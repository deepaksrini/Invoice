import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const Customerslice = createSlice({
    name: 'Customers',
    initialState: [
        { id: 1, name: 'Mark', address: 'xxx street', mobileNumber: '80500', createdAt: moment().calendar() },
        { id: 2, name: 'John', address: 'xxx street', mobileNumber: '123213123', createdAt: moment().calendar() },
        { id: 3, name: 'Sara', address: 'xxx street', mobileNumber: '233423', createdAt: moment().calendar() }
    ],
    reducers: {
        AddCustomers: (state, action) => {
            let item = {
                id: state.length + 1,
                name: action.payload.name,
                address: action.payload.address,
                mobileNumber: action.payload.mobileNumber,
                createdAt: moment().calendar()
            }
            state.push(item)
        },
        EditCustomers: (state, actions) => {
            let index = state.findIndex(s => s.id === actions.payload.id);
            console.log(actions.payload, state)
            if (index > -1) {
                state[index].name = actions.payload.name;
                state[index].address = actions.payload.address;
                state[index].mobileNumber = actions.payload.mobileNumber;
            }
        },
        DeleteCustomers: (state, action) => {
            let index = state.findIndex(s => s.id === action.payload.id);
            state.pop(state[index]);
        }
    }
});
export const { AddCustomers, EditCustomers, DeleteCustomers } = Customerslice.actions;
export default Customerslice.reducer