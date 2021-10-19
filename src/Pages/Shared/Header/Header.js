import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div >
            <Navbar expand="md" className="header" bg=" dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">PatientCare</Navbar.Brand>
                    <nav className="">
                        <NavLink className="link-style" to="/home"> Home </NavLink>
                        <NavLink className="link-style" to="/doctors"> Doctors </NavLink>
                        <NavLink className="link-style live" to="/support"> Live Support</NavLink>
                        {user?.email ? <NavLink
                            onClick={logOut} className="link-style login" to="/login">Log out</NavLink> :
                            <NavLink className="link-style login" to="/login">Login</NavLink>
                        }
                        {user.email ? <small className="text-white" > <i className="fas fa-user text-info"></i> {user.displayName} </small> : <small></small>}
                    </nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;