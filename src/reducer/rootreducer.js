import { combineReducers } from 'redux'
import todoreducer from '../features/todos/todoSlice'
import filterreducer from '../features/filters/filterSlice'
import productreducer from '../features/Header/Products/ProductStore'
import InvoiceReducer from './../features/Invoice/Invoicestore'
import CustomerReducer from './../features/Invoice/Customer/CustomerStore'
import ItemReducer from './../features/Invoice/Item/ItemStore'

export const rootreducer = combineReducers({
    Products: productreducer,
    invoices: InvoiceReducer,
    Customers: CustomerReducer,
    Items: ItemReducer
})
