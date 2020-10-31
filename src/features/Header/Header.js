import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './Header.css'
import Product from './Products/Product';
function Header({ Products }) {
    const [currentProject, setProject] = useState('');

    useEffect(() => {
        if (Products && Products.length) {
            setProject(Products[0].name)
        } else {
            setProject('Choose Product')
        }
    }, [])

    const history = useHistory()
    return (
        <div>
            {/* <!-- BEGIN: Header--> */}
            <header className="page-topbar" id="header">
                <div className="navbar-fixed">
                    <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-light-blue-cyan">
                        <nav>
                            <div className="nav-wrapper col-12">
                                <ul className="">
                                    <li>
                                        <h1 onClick={() => history.push('/')} className="logo-wrapper">
                                            <div className="brand-logo darken-1">
                                                <img src="../../../app-assets/images/logo/materialize-logo.png" alt="materialize logo" />
                                                <span className="logo-text hide-on-small-only">{currentProject}</span>
                                            </div>
                                        </h1>
                                    </li>
                                </ul>

                                <ul className=" navbar-list right nav-wrapper mr-4">
                                    <li className="pdproduct dropdown-language"><button className="width-140 dropdown-trigger btn" data-target="translation-dropdown">{currentProject}</button></li>
                                    <li><span className="waves-effect waves-block waves-light profile-button"
                                        data-target="profile-dropdown"><span className="avatar-status avatar-online"><img src="../../../app-assets/images/avatar/avatar-7.png" alt="avatar" /><i></i></span></span></li>
                                </ul>
                                {/* <!-- translation-button--> */}
                                <ul className="dropdown-content" id="translation-dropdown">
                                    {
                                        Products && (Products.map((proj, index) => {
                                            return (<li key={index} className="dropdown-item"><span className="grey-text text-darken-1" onClick={(e) => setProject(proj.name)}>{proj.name}</span></li>)
                                        }))
                                    }
                                    <li><span data-target="modal" className="grey-text text-darken-1 modal-trigger">Add Product</span></li>
                                </ul>
                                {/* <!-- profile-dropdown--> */}
                                <ul className="dropdown-content" id="profile-dropdown">
                                    <li><a className="grey-text text-darken-1" href="user-profile-page.html"><i className="material-icons">person_outline</i> Profile</a></li>
                                    <li className="divider"></li>
                                    <li><a className="grey-text text-darken-1" href="user-login.html"><i className="material-icons">keyboard_tab</i> Logout</a></li>
                                </ul>
                            </div>
                        </nav>
                    </nav>
                </div>
            </header>
            <div id="modal" className="modal">
                <div className="modal-header row pt-3">
                    <div className="col s10">
                        <h4>Products</h4>
                    </div>
                    <div className="col s2 closebtn">
                        <a href="#!" className="modal-action modal-close"> <i className="material-icons closebut right">close</i>
                        </a>
                    </div>
                </div>
                <Product Products={Products} />
                {/* <div className="modal-footer">
                    <a href="#!" className="btn modal-action modal-close waves-effect waves-green btn-flat">Save</a>
                    <a href="#!" className="btn modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
                </div> */}
            </div>
        </div >
    )
}
const mapstateToProps = (state) => {
    return {
        Products: state.Products
    }
}
export default connect(mapstateToProps)(Header)
