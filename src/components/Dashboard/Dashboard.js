import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faDollyFlatbed, faFilePdf, faGifts, faMoneyCheckAlt, faShoppingCart, faUserCog, faUserShield } from '@fortawesome/free-solid-svg-icons'
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
import AdminRoute from '../AdminRoute/AdminRoute';



const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut, setIsLoading, admin } = useAuth();


    console.log('im');
    const element = <FontAwesomeIcon icon={faUserCog} />
    return (
        <div className="dashboard">
            <Row className="dashboard">
                <Col xs={2} className="dashboard">
                    <div
                        style={{ display: 'flex', minHeight: '100vh', height: '100%', overflow: 'scroll initial' }}
                    >
                        <CDBSidebar textColor="#fff" backgroundColor="#333">
                            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                                <NavLink
                                    to="/"
                                    className="text-decoration-none"
                                    style={{ color: 'inherit' }}
                                >
                                    Dashboard
                                </NavLink>
                            </CDBSidebarHeader>

                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>

                                    {
                                        admin ? <div>
                                            <NavLink exact to={`${url}/manageAllOrders`} activeClassName="activeClicked">
                                                <CDBSidebarMenuItem>
                                                    <FontAwesomeIcon className="custom-icon" icon={faDollyFlatbed} />  Manege All Orders
                                                </CDBSidebarMenuItem>
                                            </NavLink>
                                            <NavLink to={`${url}/manageAllProducts`} activeClassName="activeClicked">
                                                <CDBSidebarMenuItem><FontAwesomeIcon className="custom-icon" icon={faGifts} /> Manage Products</CDBSidebarMenuItem>
                                            </NavLink>
                                            <NavLink exact to={`${url}/addProduct`} activeClassName="activeClicked">
                                                <CDBSidebarMenuItem>
                                                    <FontAwesomeIcon className="custom-icon" icon={faCartPlus} /> Add Product
                                                </CDBSidebarMenuItem>
                                            </NavLink>
                                            <NavLink to={`${url}/makeAdmin`} activeClassName="activeClicked">
                                                <CDBSidebarMenuItem><FontAwesomeIcon className="custom-icon" icon={faUserShield} /> Make Admin</CDBSidebarMenuItem>
                                            </NavLink>
                                        </div> : <div>
                                            <NavLink exact to={`${url}/payment`} activeClassName="activeClicked">
                                                <CDBSidebarMenuItem><FontAwesomeIcon className="custom-icon" icon={faMoneyCheckAlt} /> Payment</CDBSidebarMenuItem>
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
                                        </div>
                                    }





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
                <Col xs={10}>
                    <Container>
                        <Switch>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <AdminRoute path={`${path}/manageAllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageAllProducts`}>
                                <ManageAllProducts></ManageAllProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                        </Switch>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;

// position: 'fixed',