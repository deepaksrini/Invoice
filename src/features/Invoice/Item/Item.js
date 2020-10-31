import React, { useState, useReducer } from 'react'
import Alert from '../../utilities/alert';
import ItemAdd from './ItemAdd/ItemAdd';
import ItemList from './ItemList/ItemList';
import { getAlertMessages } from './../../utilities/reducers/alertReducer'

function Item({ Items }) {
    const [isAdd, SetAdd] = useState(false);
    const [alert, dispatch] = useReducer(getAlertMessages, { type: '', message: '' })
    console.log(Items)
    const isMobile = window.innerWidth <= 430 ? true : false;
    const handleItemAddChange = (isAddItem) => {
        SetAdd(isAddItem);
        dispatch({ type: "SUCCESS", message: "Item has been added successfully !" })
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
                                isAdd && (<ItemAdd onItemAddChange={handleItemAddChange} />)
                            }
                            <ul className="collection with-header">
                                {
                                    !isMobile && Items && Items.length > 0 && (
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
                                    Items && Items.length > 0 ?
                                        Items.map((cust, index) => {
                                            return (< ItemList key={index} closeAlertMsg={(type, message) => closeAlertMsg(type, message)} index={index} isMobile={isMobile} {...cust} />)
                                        }) : (<li className=" center-align padding-2">
                                            No Items added

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
export default Item