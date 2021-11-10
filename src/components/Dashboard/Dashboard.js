import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faDollyFlatbed, faFilePdf, faGifts, faMoneyCheckAlt, faShoppingCart, faUserShield } from '@fortawesome/free-solid-svg-icons'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

import './Dashboard.css';

import {
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import AddProduct from '../AddProduct/AddProduct';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import useAuth from '../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';



const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth();

    const element = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className="dashboard">
            <Row>
                <Col xs={3}>
                    <div
                        style={{ display: 'flex', minHeight: '100vh', height: '100%', overflow: 'scroll initial' }}
                    >
                        <CDBSidebar textColor="#fff" backgroundColor="#333">
                            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                                <a
                                    href="/"
                                    className="text-decoration-none"
                                    style={{ color: 'inherit' }}
                                >
                                    Dashboard
                                </a>
                            </CDBSidebarHeader>

                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>
                                    <NavLink to={`${url}`} activeClassName="activeClicked">
                                        <CDBSidebarMenuItem><FontAwesomeIcon className="custom-icon" icon={faUserShield} /> Make Admin</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink to={`${url}/manageAllProducts`} activeClassName="activeClicked">
                                        <CDBSidebarMenuItem><FontAwesomeIcon className="custom-icon" icon={faGifts} /> Manage Products</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to={`${url}/payment`} activeClassName="activeClicked">
                                        <CDBSidebarMenuItem><FontAwesomeIcon className="custom-icon" icon={faMoneyCheckAlt} /> Payment</CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to={`${url}/addProduct`} activeClassName="activeClicked">
                                        <CDBSidebarMenuItem>
                                            <FontAwesomeIcon className="custom-icon" icon={faCartPlus} /> Add Product
                                        </CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to={`${url}/myOrders`} activeClassName="activeClicked">
                                        <CDBSidebarMenuItem>
                                            <FontAwesomeIcon className="custom-icon" icon={faShoppingCart} /> My Orders
                                        </CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to={`${url}/review`} activeClassName="activeClicked">
                                        <CDBSidebarMenuItem>
                                            <FontAwesomeIcon className="custom-icon" icon={faFilePdf} /> Review
                                        </CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact to={`${url}/manageAllOrders`} activeClassName="activeClicked">
                                        <CDBSidebarMenuItem>
                                            <FontAwesomeIcon className="custom-icon" icon={faDollyFlatbed} />  Manege All Orders
                                        </CDBSidebarMenuItem>
                                    </NavLink>

                                    <CDBSidebarMenuItem>

                                        <Button className="regular-btn" onClick={logOut}>LogOut</Button>
                                    </CDBSidebarMenuItem>

                                </CDBSidebarMenu>
                            </CDBSidebarContent>

                            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                        padding: '20px 5px',
                                    }}
                                >
                                    Sidebar Footer
                                </div>
                            </CDBSidebarFooter>
                        </CDBSidebar>
                    </div>
                </Col>
                <Col xs={9}>
                    <Switch>
                        <Route exact path={path}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageAllProducts`}>
                            <ManageAllProducts></ManageAllProducts>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;

// position: 'fixed',