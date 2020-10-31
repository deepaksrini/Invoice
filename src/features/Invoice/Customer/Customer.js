import React, { useState, useReducer } from 'react'
import Alert from '../../utilities/alert';
import CustomerAdd from './CustomerAdd/CustomerAdd';
import CustomerList from './CustomerList/CustomerList';
import { getAlertMessages } from './../../utilities/reducers/alertReducer'

function Customer({ Customers }) {
    const [isAdd, SetAdd] = useState(false);
    const [alert, dispatch] = useReducer(getAlertMessages, { type: '', message: '' })

    const isMobile = window.innerWidth <= 430 ? true : false;
    const handleCustomerAddChange = (isAddCustomer) => {
        SetAdd(isAddCustomer);
        dispatch({ type: "SUCCESS", message: "Customer has been added successfully !" })
    }
    function closeAlertMsg(type, message) {
        dispatch({ type: type, message: message })
    }
    return (

        <div className="row">
            <div className="col s12">
                {alert.type && alert.type !== "" && <Alert closeAlert={() => closeAlertMsg('', '')} type={alert.type} message={alert.message} />}
                {
                    !isAdd && (
                        <div className="card-title direction-right right">
                            <button onClick={() => SetAdd(true)} className="btn btn-block">Add</button>
                        </div>
                    )}
                <div id="view-content">
                    <div className="row">
                        <div className="col s12">
                            {
                                isAdd && (<CustomerAdd onCustomerAddChange={handleCustomerAddChange} />)
                            }
                            <ul className="collection with-header">
                                {
                                    !isMobile && Customers && Customers.length > 0 && (
                                        <li className=" center-align padding-2">
                                            <div className="borderbottom margin margin-top-contact font-weight-900 font-size-20">

                                                <div className=" row">
                                                    <div className="col s3">
                                                        Name
                                                     </div>
                                                    <div className="col s3">
                                                        Address
                                                   </div>
                                                    <div className="col s3">
                                                        Mobile Number
                                                    </div>
                                                    <div className="col s3 direction-right">
                                                        Actions
                                                    </div>
                                                </div>

                                            </div>
                                        </li>

                                    )
                                }

                                {
                                    Customers && Customers.length > 0 ?
                                        Customers.map((cust, index) => {
                                            return (< CustomerList key={index} closeAlertMsg={(type, message) => closeAlertMsg(type, message)} index={index} isMobile={isMobile} {...cust} />)
                                        }) : (<li className=" center-align padding-2">
                                            No Customers added

                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Customer