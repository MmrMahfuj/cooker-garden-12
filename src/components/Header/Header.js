import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar expand="lg" className=" custom-nav">
                <Container>
                    <Navbar.Brand className="fs-2 header-title" as={Link} to="/home">Cooker Garden</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/explore">Explore</NavLink>

                            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>

                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </Nav>
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