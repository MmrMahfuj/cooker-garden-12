import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/log5.png';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar expand="lg" className=" custom-nav">
                <Container fluid="xxl">
                    <Navbar.Brand className="header-title" as={Link} to="/home">
                        <img src={logo} className="cooker-logo" alt="" />
                        Cooker Garden</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/explore">Discover</NavLink>

                            {
                                user.email && <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                            }

                            {/* <NavLink className="nav-link" to="/dashboard-2">Dashboard2</NavLink> */}
                        </Nav>
                        <NavLink className="nav-link" to="/about">About</NavLink>

                        <small className="mx-3 custom-name">{user?.displayName}</small>
                        {user?.email ? <Button className="regular-btn" onClick={logOut}>LogOut</Button> :
                            <Link to="/login"><Button className="regular-btn">Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;