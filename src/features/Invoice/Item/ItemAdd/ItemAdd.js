import React from 'react'
import { connect } from 'react-redux';
import useInputHooks from '../../../../hooks/useInputHooks'
import { AddItems } from './../ItemStore';

function ItemAdd({ onItemAddChange, AddItems }) {
    const [bindItemName, resetItemname] = useInputHooks('');
    const [bindItemCost, resetItemCost] = useInputHooks('');
    const [bindItemDiscount, resetItemDiscount] = useInputHooks('');
    const SubmitItem = (e) => {
        e.preventDefault();
        if (bindItemName.value.trim() === "" || bindItemCost.value.trim() === "" || bindItemDiscount.value.trim() === "") {
            return false;
        }
        AddItems(bindItemName.value, bindItemCost.value, bindItemDiscount.value)
        resetItemname();
        resetItemCost();
        resetItemDiscount();
        onItemAddChange(false);
    }

    return (
        <div className="row m4">
            <div className="edit-contact-item mb-5 mt-5">

                <div className="input-field col s12">
                    <i className="material-icons prefix"> business </i>
                    <input id="Item_name" type="text" value={bindItemName.value} onChange={bindItemName.onChange} className="validate" required />
                    <label htmlFor="Item_name">Item Name</label>
                </div>

                <div className="input-field col s12">
                    <i className="material-icons prefix"> business </i>
                    <input id="Item_Cost" type="text" value={bindItemCost.value} onChange={bindItemCost.onChange} className="validate" required />
                    <label htmlFor="Item_Cost">Cost</label>
                </div>

                <div className="input-field col s12">
                    <i className="material-icons prefix"> business </i>
                    <input id="Item_discount" type="text" value={bindItemDiscount.value} onChange={bindItemDiscount.onChange} className="validate" required />
                    <label htmlFor="Item_discount">Discount</label>
                </div>
                <div className="card-action center-align">
                    <button onClick={SubmitItem} className="btn-small waves-effect waves-light">
                        <span>Add Item</span>
                    </button>
                </div>
            </div>
        </div>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddItems: (name, Cost, Discount) => dispatch(AddItems({ name: name, discount: Discount, cost: Cost }))
    }
}
export default connect(null, mapDispatchToProps)(ItemAdd)
