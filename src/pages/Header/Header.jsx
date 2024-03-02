import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvider/authProvider';
const Header = () => {
    const { userData, logOutUser } = useContext(AuthContext);
    // console.log(userData);
    const handleLogout = () => {
        logOutUser()
            .then(() => {
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <nav className='container my-4'>
            <div className='text-center'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <p className='my-2'>Journalism Without Fear or Favour</p>
                <h6>{moment().format('dddd, MMMM D, YYYY')}</h6>
            </div>
            <div className='d-flex gap-3 p-3 bg-gray my-3'>
                <button className='btn btn-danger'>Latest</button>
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div className='d-flex'>
                <Navbar className=''>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <nav className="mx-auto d-flex gap-2">
                                <Link to='/' className='text-muted text-decoration-none'>Home</Link>
                                <Link to='/about' className='text-muted text-decoration-none'>About</Link>
                                <Link to='/career' className='text-muted text-decoration-none'>Career</Link>
                            </nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {
                    userData &&
                    <div className='login-div d-flex align-items-center gap-2 ms-auto'>
                        <img src={userData?.photoURL} alt="" className='rounded-circle' />
                        <span className='bg-secondary p-2 rounded text-white'>{userData.displayName}</span>
                        <button className='btn btn-danger' onClick={handleLogout}>Sign Out</button>
                    </div>
                }
                {
                    !userData &&
                    <div className='login-div d-flex align-items-center gap-2 ms-auto'>
                        <img src={user} alt="" />
                        <Link to='/login' className='btn btn-secondary'>Login</Link>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Header;