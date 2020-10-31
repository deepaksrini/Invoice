import React from 'react'
import { connect } from 'react-redux';
import useInputHooks from '../../../../hooks/useInputHooks'
import { AddCustomers } from './../CustomerStore';

function CustomerAdd({ onCustomerAddChange, AddCustomers }) {
    const [bindCustomerName, resetCustomername] = useInputHooks('');
    const [bindCustomerAddress, resetCustomerAddress] = useInputHooks('');
    const [bindCustomerMobile, resetCustomerMobile] = useInputHooks('');
    const SubmitCustomer = (e) => {
        e.preventDefault();
        if (bindCustomerName.value.trim() === "" || bindCustomerAddress.value.trim() === "" || bindCustomerMobile.value.trim() === "") {
            return false;
        }
        AddCustomers(bindCustomerName.value, bindCustomerAddress.value, bindCustomerMobile.value)
        resetCustomername();
        resetCustomerAddress();
        resetCustomerMobile();
        onCustomerAddChange(false);
    }

    return (
        <div className="row m4">
            <div className="edit-contact-item mb-5 mt-5">

                <div className="input-field col s12">
                    <i className="material-icons prefix"> business </i>
                    <input id="Customer_name" type="text" value={bindCustomerName.value} onChange={bindCustomerName.onChange} className="validate" required />
                    <label htmlFor="Customer_name">Customer Name</label>
                </div>

                <div className="input-field col s12">
                    <i className="material-icons prefix"> business </i>
                    <input id="Customer_address" type="text" value={bindCustomerAddress.value} onChange={bindCustomerAddress.onChange} className="validate" required />
                    <label htmlFor="Customer_address">Address</label>
                </div>

                <div className="input-field col s12">
                    <i className="material-icons prefix"> business </i>
                    <input id="Customer_name" type="text" value={bindCustomerMobile.value} onChange={bindCustomerMobile.onChange} maxLength="10" className="validate" required />
                    <label htmlFor="Customer_name">Mobile Number</label>
                </div>
                <div className="card-action center-align">
                    <button onClick={SubmitCustomer} className="btn-small waves-effect waves-light">
                        <span>Add Customer</span>
                    </button>
                </div>
            </div>
        </div>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddCustomers: (name, address, mobile) => dispatch(AddCustomers({ name: name, mobileNumber: mobile, address: address }))
    }
}
export default connect(null, mapDispatchToProps)(CustomerAdd)
