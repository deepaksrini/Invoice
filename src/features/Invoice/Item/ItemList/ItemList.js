import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { AddItems, DeleteItems, EditItems } from './../ItemStore';
import './ItemList.css'
import useInputHooks from './../../../../hooks/useInputHooks'
function ItemList({ isMobile, index, id, name, discount, cost, DeleteItems, EditItems, closeAlertMsg }) {
    const [isEdit, SetEdit] = useState(false);
    const [bindItemName] = useInputHooks(name);
    const [bindItemCost] = useInputHooks(cost);
    const [bindDiscount] = useInputHooks(discount);
    const ItemNameref = useRef(null);
    useEffect(() => {
        if (isEdit) {
            ItemNameref.current.focus();
        }
    }, [isEdit])

    function SaveEditItem() {
        SetEdit(false)
        EditItems(id, bindItemName.value, bindItemCost.value, bindDiscount.value)
        closeAlertMsg('SUCCESS', 'Item Updated successfully !')
    }
    function DeleteItemsByID(id) {
        DeleteItems(id);
        closeAlertMsg('SUCCESS', 'Item Deleted successfully !')

    }
    return (
        <React.Fragment>
            {
                !isMobile ? (
                    <li className="center-align padding-2">
                        <div className="borderbottom margin margin-top-contact">
                            <div className="row">
                                <div className="col s3">
                                    {isEdit ? (<input id="username" ref={ItemNameref} name="username" required type="text" onChange={bindItemName.onChange} value={bindItemName.value} />
                                    ) : name}
                                </div>
                                <div className="col s3">
                                    {isEdit ? (<input id="Cost" name="Cost" required type="text" onChange={bindItemCost.onChange} value={bindItemCost.value} />
                                    ) : cost}
                                </div>
                                <div className="col s3">
                                    {isEdit ? (<input id="discount" name="discount" required maxLength="10" type="text" onChange={bindDiscount.onChange} value={bindDiscount.value} />
                                    ) : discount}
                                </div>
                                <div className="col s3 direction-right">
                                    {isEdit ? <i onClick={SaveEditItem} className="material-icons cursor-pointer">save</i> :
                                        (
                                            <React.Fragment>
                                                <i onClick={() => SetEdit(true)} className="material-icons cursor-pointer">edit</i>
                                                <i onClick={() => DeleteItemsByID(id)} className="material-icons cursor-pointer">delete</i>
                                            </React.Fragment>
                                        )}
                                </div>

                            </div>
                        </div>
                    </li>
                ) :
                    (<li className="borderblack padding-4 margin-1">
                        <div className="row padding-2 font-weight-900 font-size-20">
                            <div className="col s12 bold">Item {index}</div>
                        </div>
                        <div className="row padding-2 ">
                            <div className="col s12 font-weight-500 font-size-20">Item Name</div>
                            <div className="col s12">
                                {isEdit ? (<input id="username" ref={ItemNameref} name="username" required type="text" onChange={bindItemName.onChange} value={bindItemName.value} />
                                ) : name}
                            </div>
                        </div>
                        <div className="row  padding-2 ">
                            <div className="col s12 font-weight-500 font-size-20">Cost</div>
                            <div className="col s12">  {isEdit ? (<input id="Cost" name="Cost" required type="text" onChange={bindItemCost.onChange} value={bindItemCost.value} />
                            ) : cost}</div>
                        </div>
                        <div className="row  padding-2 ">
                            <div className="col s12 font-weight-500 font-size-20">Discount</div>
                            <div className="col s12">{isEdit ? (<input id="discount" name="discount" required maxLength="10" type="text" onChange={bindDiscount.onChange} value={bindDiscount.value} />
                            ) : discount}</div>
                        </div>
                        <div className="row padding-2">
                            <div className="col s12 font-weight-500 font-size-20">Actions</div>
                            <div className="col s12">
                                {isEdit ? <i onClick={SaveEditItem} className="material-icons cursor-pointer">save</i> :
                                    (
                                        <React.Fragment>
                                            <i onClick={() => SetEdit(true)} className="material-icons cursor-pointer">edit</i>
                                            <i onClick={() => DeleteItemsByID(id)} className="material-icons cursor-pointer">delete</i>
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
        DeleteItems: (id) => dispatch(DeleteItems({ id })),
        EditItems: (id, name, cost, discount) => dispatch(EditItems({ id, name, cost, discount }))
    }
}
export default connect(null, mapdispatchtoprops)(ItemList)
