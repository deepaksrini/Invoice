import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
const invoiceslice = createSlice({
    name: 'invoice',
    initialState: [{
        InvoiceId: '1',
        CustomerName: 'Deepak Srin',
        Amount: 100000,
        Balance: 0,
        Date: moment().calendar(),
        Category: '5liters',
        Status: 'paid',
        productId: 1
    },
    {
        InvoiceId: '2',
        CustomerName: 'Lavanya Srin',
        Amount: 100000,
        Balance: 100,
        Date: moment().calendar(),
        Category: '5liters',
        Status: 'unpaid',
        productId: 1
    }],
    reducers: {
        CreateInvoice: (state, actions) => {
            state.push(actions.payload)
        },
        EditInvoice: (state, actions) => {
            state.map((invoice) => {
                if (invoice.InvoiceId === actions.payload.InvoiceId) {
                    invoice = actions.payload
                }
                return invoice;
            })
            return state;
        }
    }
})

export const { CreateInvoice, EditInvoice } = invoiceslice.actions;
export default invoiceslice.reducer