import React from 'react'
import { connect } from 'react-redux';
import useInputHooks from '../../../../hooks/useInputHooks'
import { AddProducts } from '../ProductStore';

function ProductAdd({ onProductAddChange, AddProducts }) {
    const [bindProductName, resetproductname] = useInputHooks('');

    const SubmitProduct = (e) => {
        e.preventDefault();
        console.log(bindProductName.value)
        if (bindProductName.value.trim() === "") {
            return false;
        }
        AddProducts(bindProductName.value)
        resetproductname();
        onProductAddChange(false);
    }

    return (
        <div className="row">
            <form className="edit-contact-item mb-5 mt-5">

                <div className="input-field col s12">
                    <i className="material-icons prefix"> business </i>
                    <input id="product_name" type="text" value={bindProductName.value} onChange={bindProductName.onChange} className="validate" required />
                    <label htmlFor="product_name">Product Name</label>
                </div>
                <div className="card-action pl-0 pr-0 right-align">
                    <button onClick={SubmitProduct} className="btn-small waves-effect waves-light">
                        <span>Add Contact</span>
                    </button>
                </div>
            </form>
        </div>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddProducts: (name) => dispatch(AddProducts({ name: name }))
    }
}
export default connect(null, mapDispatchToProps)(ProductAdd)
