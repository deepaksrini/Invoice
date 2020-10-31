import React from 'react'
import './Invoice.css'
import InvoiceList from './../InvoiceList/InvoiceList'

import { useHistory } from 'react-router-dom'

function InvoiceFilter() {

    const history = useHistory();
    return (
        <div id="main">
            <div className="row mb-6">
                <div className="content-wrapper-before blue-grey lighten-5"></div>
                <div className="col s12">
                    <div className="container">
                        <section className="invoice-list-wrapper  section">
                            <div className="invoice-filter-action mr-3">
                                <a href="#" className="btn waves-effect waves-light invoice-export border-round z-depth-4">
                                    <i className="material-icons">picture_as_pdf</i>
                                    <span className="hide-on-small-only">Export to PDF</span>
                                </a>
                            </div>
                            <div onClick={() => history.push('/Invoice/Add')} className="invoice-create-btn">
                                <div href="app-invoice-add.html" className="btn waves-effect waves-light invoice-create border-round z-depth-4">
                                    <i className="material-icons">add</i>
                                    <span className="hide-on-small-only">Create Invoice</span>
                                </div>
                            </div>
                            <div className="filter-btn">
                                <a className='dropdown-trigger btn waves-effect waves-light purple darken-1 border-round' href='#'
                                    data-target='btn-filter'>
                                    <span className="hide-on-small-only">Filter Invoice</span>
                                    <i className="material-icons">keyboard_arrow_down</i>
                                </a>
                                <ul id='btn-filter' className='dropdown-content'>
                                    <li><a href="#!">Paid</a></li>
                                    <li><a href="#!">Unpaid</a></li>
                                    <li><a href="#!">Partial Payment</a></li>
                                </ul>
                            </div>
                            <InvoiceList />
                        </section>
                    </div>
                    <div className="content-overlay"></div>
                </div>
            </div>
        </div >
    )
}

export default InvoiceFilter
