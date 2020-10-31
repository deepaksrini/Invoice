import React from 'react'
import { connect } from 'react-redux';
import InvoiceDetails from './InvoiceDetails';
function InvoiceList({ invoices }) {
    return (
        <div className="responsive-table mb-3">
            <table className="table invoice-data-table white border-radius-4 pt-1">
                <thead>
                    <tr className="align-items-center center-align">
                        <th></th>
                        <th></th>
                        <th className="center-align" >Invoice#</th>
                        <th className="center-align" >Customer</th>
                        <th className="center-align" >Tags</th>
                        <th className="center-align" >Date</th>
                        <th className="center-align" >Amount</th>
                        <th className="center-align" >Balance</th>
                        <th className="center-align" >Status</th>
                        <th className="center-align" >Action</th>
                    </tr>
                </thead>

                <tbody >
                    {invoices && invoices.map((invoice, index) => {
                        return (< InvoiceDetails key={index} {...invoice} />)

                    })
                    }

                </tbody>
            </table>
            { !invoices && (<tr> No Invoice Record Found</tr>)}
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        invoices: state.invoices
    }
}
export default connect(mapStateToProps)(InvoiceList)
