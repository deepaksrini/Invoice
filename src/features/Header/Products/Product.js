import React, { useState,useReducer } from 'react'
import Alert from '../../utilities/alert';
import ProductAdd from './ProductAdd/ProductAdd';
import ProductList from './ProductList/ProductList';
import { getAlertMessages} from './../../utilities/reducers/alertReducer'

function Product({ Products }) {


    const [isAdd, SetAdd] = useState(false);
    const [alert, dispatch] = useReducer(getAlertMessages,{type:'',message:''})

    const isMobile = window.innerWidth <= 430 ? true : false;
    const handleProductAddChange = (isAddProduct) => {
        SetAdd(isAddProduct);
        dispatch({type:"SUCCESS",message:"Product has been added successfully !"})
    }
    function closeAlertMsg(type,message){
        dispatch({type:type,message:message})
    }
    return (

        <div className="row">
            <div className="col s12">
            {alert.type && alert.type!=="" && <Alert closeAlert={()=>closeAlertMsg('','')} type={alert.type} message={alert.message} />}
               {
                   !isAdd &&(
                   <div className="card-title direction-right right">
                        <button onClick={()=>SetAdd(true)} className="btn btn-block">Add</button>
                    </div>
                )}
                <div id="view-content">
                    <div className="row">
                        <div className="col s12">
                            {
                                isAdd && (<ProductAdd onProductAddChange={handleProductAddChange}/>)
                            }
                            <ul className="collection with-header">
                                {
                                    !isMobile && Products && Products.length > 0 &&(
                                        <li className=" center-align padding-2">
                                            <div className="borderbottom margin margin-top-contact font-weight-900 font-size-20">

                                                <div className=" row">
                                                    <div className="col s4">
                                                            Name
                                         </div>
                                                    <div className="col s4">
                                                            CreatedAt
                                         </div>
                                                    <div className="col s4 direction-right">
                                                            Actions
                                         </div>
                                                </div>

                                            </div>
                                        </li>

                                    )
                                }

                                {Products && Products.length > 0 ?
                                    Products.map((prod, index) => {
                                        return (< ProductList key={index} closeAlertMsg={(type,message)=>closeAlertMsg(type,message)} index={index} isMobile={isMobile} {...prod} />)
                                    }) : (<li className=" center-align padding-2">
                                            No products added
                                             
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
export default Product