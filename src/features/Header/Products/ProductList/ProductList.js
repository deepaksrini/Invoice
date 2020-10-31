import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { AddProducts, DeleteProducts, EditProducts } from '../ProductStore';
import './ProductList.css'
import useInputHooks from './../../../../hooks/useInputHooks'
function ProductList({ isMobile, index, id, name, createdAt, DeleteProducts, EditProducts, closeAlertMsg }) {
    const [isEdit, SetEdit] = useState(false);
    const [bindproduct] = useInputHooks(name);
    const inputref = useRef(null);
    useEffect(() => {
        if (isEdit) {
            inputref.current.focus();
        }
    }, [isEdit])

    function SaveEditProduct() {
        SetEdit(false)
        EditProducts(id, bindproduct.value)
        closeAlertMsg('SUCCESS', 'Product Updated successfully !')
    }
    function DeleteProductsByID(id) {

        DeleteProducts(id);
        closeAlertMsg('SUCCESS', 'Product Deleted successfully !')

    }
    return (
        <React.Fragment>
            {
                !isMobile && (
                    <li className="center-align padding-2">
                        <div className="borderbottom margin margin-top-contact">
                            <div className="row">
                                <div className="col s4">
                                    {isEdit ? (<input id="username" ref={inputref} name="username" required type="text" onChange={bindproduct.onChange} value={bindproduct.value} />
                                    ) : name}
                                </div>
                                <div className="col s4">
                                    {createdAt}

                                </div>
                                <div className="col s4 direction-right">
                                    {isEdit ? <i onClick={SaveEditProduct} className="material-icons cursor-pointer">save</i> :
                                        (
                                            <React.Fragment>
                                                <i onClick={() => SetEdit(true)} className="material-icons cursor-pointer">edit</i>
                                                <i onClick={() => DeleteProductsByID(id)} className="material-icons cursor-pointer">delete</i>
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
                        <div className="col s12 bold">Product {index}</div>
                    </div>
                    <div className="row padding-2 ">
                        <div className="col s12 font-weight-500 font-size-20">Product Name</div>
                        <div className="col s12">
                            {isEdit ? (<input id="username" ref={inputref} name="username" required type="text" onChange={bindproduct.onChange} value={bindproduct.value} />
                            ) : name}
                        </div>
                    </div>
                    <div className="row  padding-2 ">
                        <div className="col s12 font-weight-500 font-size-20">Created At</div>
                        <div className="col s12">{createdAt}</div>
                    </div>
                    <div className="row padding-2">
                        <div className="col s12 font-weight-500 font-size-20">Actions</div>
                        <div className="col s12">
                            {isEdit ? <i onClick={SaveEditProduct} className="material-icons cursor-pointer">save</i> :
                                (
                                    <React.Fragment>
                                        <i onClick={() => SetEdit(true)} className="material-icons cursor-pointer">edit</i>
                                        <i onClick={() => DeleteProductsByID(id)} className="material-icons cursor-pointer">delete</i>
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
        AddProducts: (name) => dispatch(AddProducts({ name })),
        DeleteProducts: (id) => dispatch(DeleteProducts({ id })),
        EditProducts: (id, name) => dispatch(EditProducts({ id, name }))
    }
}
export default connect(null, mapdispatchtoprops)(ProductList)
