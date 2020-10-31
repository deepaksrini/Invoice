import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { AddCustomers, DeleteCustomers, EditCustomers } from './../CustomerStore';
import './CustomerList.css'
import useInputHooks from './../../../../hooks/useInputHooks'
function CustomerList({ isMobile, index, id, name, mobileNumber, address, DeleteCustomers, EditCustomers, closeAlertMsg }) {
    const [isEdit, SetEdit] = useState(false);
    const [bindCustomerName] = useInputHooks(name);
    const [bindCustomerMobile] = useInputHooks(address);
    const [bindCustomerAddress] = useInputHooks(mobileNumber);
    const customerNameref = useRef(null);
    useEffect(() => {
        if (isEdit) {
            customerNameref.current.focus();
        }
    }, [isEdit])

    function SaveEditCustomer() {
        SetEdit(false)
        EditCustomers(id, bindCustomerName.value,bindCustomerAddress.value,bindCustomerMobile.value)
        closeAlertMsg('SUCCESS', 'Customer Updated successfully !')
    }
    function DeleteCustomersByID(id) {
        DeleteCustomers(id);
        closeAlertMsg('SUCCESS', 'Customer Deleted successfully !')

    }
    return (
        <React.Fragment>
            {
                !isMobile && (
                    <li className="center-align padding-2">
                        <div className="borderbottom margin margin-top-contact">
                            <div className="row">
                                <div className="col s3">
                                    {isEdit ? (<input id="username" ref={customerNameref} name="username" required type="text" onChange={bindCustomerName.onChange} value={bindCustomerName.value} />
                                    ) : name}
                                </div>
                                <div className="col s3">
                                    {isEdit ? (<input id="address" name="address" required type="text" onChange={bindCustomerAddress.onChange} value={bindCustomerAddress.value} />
                                    ) : address}
                                </div>
                                <div className="col s3">
                                    {isEdit ? (<input id="mobileNumber" name="mobileNumber" required maxLength="10" type="text" onChange={bindCustomerMobile.onChange} value={bindCustomerMobile.value} />
                                    ) : mobileNumber}
                                </div>
                                <div className="col s3 direction-right">
                                    {isEdit ? <i onClick={SaveEditCustomer} className="material-icons cursor-pointer">save</i> :
                                        (
                                            <React.Fragment>
                                                <i onClick={() => SetEdit(true)} className="material-icons cursor-pointer">edit</i>
                                                <i onClick={() => DeleteCustomersByID(id)} className="material-icons cursor-pointer">delete</i>
                                            </React.Fragment>
                                        )}
                                </div>

                            </div>
                        </div>
                    </li>
                )
            }
            {
                isMobile && (<li className="borderblack padding-4 margin-1">
                    <div className="row padding-2 font-weight-900 font-size-20">
                        <div className="col s12 bold">Customer {index}</div>
                    </div>
                    <div className="row padding-2 ">
                        <div className="col s12 font-weight-500 font-size-20">Customer Name</div>
                        <div className="col s12">
                            {isEdit ? (<input id="username" ref={customerNameref} name="username" required type="text" onChange={bindCustomerName.onChange} value={bindCustomerName.value} />
                            ) : name}
                        </div>
                    </div>
                    <div className="row  padding-2 ">
                        <div className="col s12 font-weight-500 font-size-20">Address</div>
                        <div className="col s12">  {isEdit ? (<input id="address" name="address" required type="text" onChange={bindCustomerAddress.onChange} value={bindCustomerAddress.value} />
                        ) : address}</div>
                    </div>
                    <div className="row  padding-2 ">
                        <div className="col s12 font-weight-500 font-size-20">Mobile Number</div>
                        <div className="col s12">{isEdit ? (<input id="mobileNumber" name="mobileNumber" required maxLength="10" type="text" onChange={bindCustomerMobile.onChange} value={bindCustomerMobile.value} />
                        ) : mobileNumber}</div>
                    </div>
                    <div className="row padding-2">
                        <div className="col s12 font-weight-500 font-size-20">Actions</div>
                        <div className="col s12">
                            {isEdit ? <i onClick={SaveEditCustomer} className="material-icons cursor-pointer">save</i> :
                                (
                                    <React.Fragment>
                                        <i onClick={() => SetEdit(true)} className="material-icons cursor-pointer">edit</i>
                                        <i onClick={() => DeleteCustomersByID(id)} className="material-icons cursor-pointer">delete</i>
                                    </React.Fragment>
                                )}
                        </div>
                    </div>
                </li>)
            }
        </React.Fragment >
    )
}
const mapdispatchtoprops = (dispatch) => {
    return {
        DeleteCustomers: (id) => dispatch(DeleteCustomers({ id })),
        EditCustomers: (id, name, address, mobileNumber) => dispatch(EditCustomers({ id, name, address, mobileNumber }))
    }
}
export default connect(null, mapdispatchtoprops)(CustomerList)
