import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Customers from './../Customer/Customer'
import Items from './../Item/Item'

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

export class ItemDetails {
    constructor() {
        this.ItemName = "";
        this.Cost = 0;
        this.Discount = 0;
        this.Quantity = 0;
    }
}
const initialValues = {
    ItemDetails: []
};
const validateSchema = Yup.object().shape({
    ItemDetails: Yup.array()
        .of(
            Yup.object().shape({
                ItemName: Yup.string().required("Name is required"),
                email: Yup.string()
                    .email("Invalid email")
                    .required("Please enter email"),
                includeAge: Yup.bool(),
                age: Yup.mixed().when("includeAge", {
                    is: true,
                    then: Yup.number()
                        .nullable()
                        .required("Age is required")
                })
            })
        )
        .min(1, "Friends is >= 1")
});
function InvoiceAdd({ match, Customer, Item }) {

    const [currentCustomer, setCustomer] = useState('');
    const [currentItem, setItem] = useState('');

    useEffect(() => {
        if (Customer && Customer.length) {
            setCustomer(Customer[0].name)
        } else {
            setCustomer('Select Customer')
        }
        console.log(Item);
        if (Item && Item.length) {
            setItem(Item[0].name)
        } else {
            setItem('Select Item')
        }
    }, [])

    console.log(match.url) // /topics/react-router/url-parameters
    return (
        <div id="main">
            <div className="row">
                <div className="content-wrapper-before blue-grey lighten-5"></div>
                <div className="col s12">
                    <div className="container">
                        <section className="invoice-edit-wrapper section">
                            <div className="row">
                                <div className="col xl9 m8 s12">
                                    <div className="card">
                                        <div className="card-content px-36">
                                            <div className="row mb-3">
                                                <div className="col m6 s12 invoice-logo display-flex pt-1 push-m6">
                                                    <img src="../../../app-assets/images/gallery/pixinvent-logo.png" alt="logo" height="46" width="164" />
                                                </div>
                                                <div className="col m6 s12 pull-m6">
                                                    <h3 className="indigo-text">Invoice</h3>
                                                    <input type="text" placeholder="Invoice Name" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col s12 l6 m4 input-field">

                                                    <h5 className="indigo-text">Customer</h5>
                                                    <ul className="">
                                                        <li className="dropdown-language"><button className="width-50 dropdown-trigger btn" data-target="translation-drop">{currentCustomer}</button></li>
                                                    </ul>
                                                    <ul className="dropdown-content" id="translation-drop">
                                                        {
                                                            Customer && (Customer.map((cust, index) => {
                                                                return (<li key={index} className="dropdown-item"><span className="grey-text text-darken-1" onClick={(e) => setCustomer(cust.name)}>{cust.name}</span></li>)
                                                            }))
                                                        }
                                                        <li><span data-target="modalCustomer" className="grey-text text-darken-1 modal-trigger">Add Customer</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="modalCustomer" className="modal">
                                                <div className="modal-header row pt-3">
                                                    <div className="col s10">
                                                        <h4>Customers</h4>
                                                    </div>
                                                    <div className="col s2 closebtn">
                                                        <a href="#!" className="modal-action modal-close"> <i className="material-icons closebut right">close</i>
                                                        </a>
                                                    </div>
                                                </div>

                                                <Customers Customers={Customer} />

                                            </div>
                                            <div className="invoice-product-details mb-3">
                                                <div className="form invoice-item-repeater">
                                                    <div data-repeater-list="group-a">
                                                        <div className="mb-2" data-repeater-item>
                                                            <div className="row mb-1 hide-on-small-and-down">
                                                                <div className="col s4 m4">
                                                                    <h6 className="m-0">Item</h6>
                                                                </div>
                                                                <div className="col s2">
                                                                    <h6 className="m-0">Cost</h6>
                                                                </div>
                                                                <div className="col s2">
                                                                    <h6 className="m-0">Qty</h6>
                                                                </div>
                                                                <div className="col s2">
                                                                    <h6 className="m-0">Discount</h6>
                                                                </div>
                                                                <div className="col s2 m2">
                                                                    <h6 className="m-0">Total</h6>
                                                                </div>
                                                            </div>
                                                            <div className="invoice-item display-flex mb-1">
                                                                <div className="invoice-item-filed row pt-1">
                                                                    <div className="hide-on-med-and-up mt-10 ml-10">
                                                                        <h6 className="m-0">Item</h6>
                                                                    </div>
                                                                    <div className="col s12 m4 input-field">
                                                                        <ul>
                                                                            <li className=" dropdown-language"><button className="width-100 dropdown-trigger btn" data-target="translation-dropdownitem">{currentItem}</button></li>
                                                                        </ul>
                                                                        <ul className="dropdown-content" id="translation-dropdownitem">
                                                                            {
                                                                                Item && (Item.map((data, index) => {
                                                                                    return (<li key={index} className="dropdown-item"><span className="grey-text text-darken-1" onClick={(e) => setItem(data.name)}>{data.name}</span></li>)
                                                                                }))
                                                                            }
                                                                            <li><span data-target="modalItem" className="grey-text text-darken-1 modal-trigger">Add Item</span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div id="modalItem" className="modal">
                                                                        <div className="modal-header row pt-3">
                                                                            <div className="col s10">
                                                                                <h4>Items</h4>
                                                                            </div>
                                                                            <div className="col s2 closebtn">
                                                                                <a href="#!" className="modal-action modal-close"> <i className="material-icons closebut right">close</i>
                                                                                </a>
                                                                            </div>
                                                                        </div>

                                                                        <Items Items={Item} />

                                                                    </div>
                                                                    <div className="hide-on-med-and-up mt-10 ml-10">
                                                                        <h6 className="m-0">Cost</h6>
                                                                    </div>
                                                                    <div className="col m2 s12 input-field">
                                                                        <input name="cost" type="text" placeholder="0" />
                                                                    </div>
                                                                    <div className="hide-on-med-and-up mt-10 ml-10">
                                                                        <h6 className="m-0">Quantity</h6>
                                                                    </div>
                                                                    <div className="col m2 s12 input-field">
                                                                        <input name="qty" type="text" placeholder="0" />
                                                                    </div>
                                                                    <div className="hide-on-med-and-up mt-10 ml-10">
                                                                        <h6 className="m-0">Discount</h6>
                                                                    </div>
                                                                    <div className="col m2 s12 input-field">
                                                                        <input name="discount" type="text" placeholder="0" />
                                                                    </div>
                                                                    <div className="hide-on-med-and-up mt-10 ml-10">
                                                                        <h6 className="m-0">Total</h6>
                                                                    </div>
                                                                    <div className="col m2 s12 input-field">
                                                                        <input name="total" type="text" placeholder="$00" readOnly />
                                                                    </div>
                                                                </div>
                                                                <div className="invoice-icon display-flex flex-column justify-content-between">
                                                                    <span data-repeater-delete className="delete-row-btn">
                                                                        <i className="material-icons">clear</i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input-field">
                                                        <button className="btn invoice-repeat-btn" data-repeater-create type="button">
                                                            <i className="material-icons left">add</i>
                                                            <span>Add Item</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="invoice-subtotal">
                                                <div className="row">
                                                    <div className="col m5 s12">

                                                        <h5 className="indigo-text">Payment Till Date</h5>
                                                        <div className="input-field">
                                                            <input type="text" name="paymentTillDate" placeholder="Paid Amount" />
                                                        </div>
                                                    </div>
                                                    <div className="col xl4 m7 s12 offset-xl3">
                                                        <ul>
                                                            <li className="display-flex justify-content-between">
                                                                <span className="invoice-subtotal-title">Subtotal</span>
                                                                <h6 className="invoice-subtotal-value">$00.00</h6>
                                                            </li>
                                                            <li className="display-flex justify-content-between">
                                                                <span className="invoice-subtotal-title">Discount</span>
                                                                <h6 className="invoice-subtotal-value">- $ 00.00</h6>
                                                            </li>
                                                            <li>
                                                                <div className="divider mt-2 mb-2"></div>
                                                            </li>
                                                            <li className="display-flex justify-content-between">
                                                                <span className="invoice-subtotal-title">Invoice Total</span>
                                                                <h6 className="invoice-subtotal-value">$ 00.00</h6>
                                                            </li>
                                                            <li className="display-flex justify-content-between">
                                                                <span className="invoice-subtotal-title">Paid to date</span>
                                                                <h6 className="invoice-subtotal-value">- $ 00.00</h6>
                                                            </li>
                                                            <li className="display-flex justify-content-between">
                                                                <span className="invoice-subtotal-title">Balance (USD)</span>
                                                                <h6 className="invoice-subtotal-value">$ 00,000</h6>
                                                            </li>
                                                            <li className=" mt-2">
                                                                <a href="app-invoice-view.html" className="btn btn-block waves-effect waves-light">Save Invoice</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col xl3 m4 s12">
                                    <div className="card invoice-action-wrapper mb-10">
                                        <div className="card-content">
                                            <div className="invoice-action-btn">
                                                <a className="btn indigo waves-effect waves-light display-flex align-items-center justify-content-center">
                                                    <i className="material-icons mr-4">check</i>
                                                    <span className="responsive-text">Send Invoice</span>
                                                </a>
                                            </div>
                                            <div className="invoice-action-btn">
                                                <a className="btn btn-light-indigo btn-block waves-effect waves-light">
                                                    <span className="responsive-text">Download Invoice</span>
                                                </a>
                                            </div>
                                            <div className="row invoice-action-btn">
                                                <div className="col s12 preview">
                                                    <a className="btn btn-light-indigo btn-block waves-effect waves-light">
                                                        <span className="responsive-text">Preview</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="content-overlay"></div>
                </div>
            </div>

        </div>

    )
}
const mapstateToProps = (state) => {
    return {
        Customer: state.Customers,
        Item: state.Items
    }
}
export default connect(mapstateToProps)(InvoiceAdd)
