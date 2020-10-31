import React from 'react'

function InvoiceDetails({ InvoiceId, CustomerName, Amount, Balance, Date, Category, Status }) {
    return (
        <React.Fragment>
            <tr>
                <td></td>
                <td></td>
                <td className="center-align">
                    <a href="app-invoice-view.html">{InvoiceId}</a>
                </td>
                <td className="center-align"><span className="invoice-customer text-capitalize">{CustomerName}</span></td>
                <td className="center-align">{Category}
                </td>
                <td className="center-align" >{Date}</td>
                <td className="center-align"><span className="invoice-amount">{Amount}</span></td>
                <td className="center-align"><span className="invoice-amount">{Balance}</span></td>
                <td className="center-align">
                    <span className={`${Status === 'paid' ? 'green-text' : 'red-text'}  text-capitalize`}>{Status}</span>
                </td>
                <td className="center-align">
                    <div className="invoice-action center-align">
                        <a href="app-invoice-view.html" className="invoice-action-view mr-4">
                            <i className="material-icons">remove_red_eye</i>
                        </a>
                        <a href="app-invoice-edit.html" className="invoice-action-edit">
                            <i className="material-icons">edit</i>
                        </a>
                    </div>
                </td>
            </tr>
        </React.Fragment>
    )
}

export default InvoiceDetails
