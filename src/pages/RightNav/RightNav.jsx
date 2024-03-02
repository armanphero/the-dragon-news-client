import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
import bg from '../../assets/bg.png';
import { AuthContext } from '../../authProvider/authProvider';

const RightNav = () => {
    const { userData } = useContext(AuthContext);
    return (
        <div>
            <div>
                {
                    !userData &&
                    <div className='d-flex flex-column gap-2'>
                        <h4 className='fs-5 font-bold'>Login with</h4>
                        <button className='border border-2 border-primary-subtle text-primary rounded py-2 bg-white'><FaGoogle className='me-2' /><small>Login with Google</small></button>
                        <button className='border border-2 border-black text-black rounded py-2 bg-white'><FaGithub className='me-2' /><small>Login with Github</small></button>
                    </div>
                }
                <div className='mt-4'>
                    <h4 className='fs-5 font-semibold mb-3'>Find us on</h4>
                    <ListGroup>
                        <ListGroup.Item className='d-flex align-items-center' role='button'>
                            <span className='social-icon me-3 p-2 bg-body-secondary rounded-circle'>
                                <FaFacebookF className='text-primary' />
                            </span>
                            <small className='fw-semibold text-secondary fs-6'>Facebook</small>
                        </ListGroup.Item>
                        <ListGroup.Item className='d-flex align-items-center' role='button'>
                            <span className='social-icon me-3 p-2 bg-body-secondary rounded-circle'>
                                <FaTwitter className='text-info' />
                            </span>
                            <small className='fw-semibold text-secondary fs-6'>Twitter</small>
                        </ListGroup.Item>
                        <ListGroup.Item className='d-flex align-items-center' role='button'>
                            <span className='social-icon me-3 p-2 bg-body-secondary rounded-circle'>
                                <FaInstagram className='text-danger' />
                            </span>
                            <small className='fw-semibold text-secondary fs-6'>Instagram</small>
                        </ListGroup.Item>
                    </ListGroup>
                </div>

                <div className='bg-gray mt-4 p-4'>
                    <h4 className='fs-5 font-semibold mb-3'>Q-Zone</h4>
                    <div className='text-center'>
                        <img src={qZone1} alt="" />
                        <img src={qZone2} alt="" />
                        <img src={qZone3} alt="" />
                    </div>
                </div>

                <div className='position-relative text-white mt-4'>
                    <img src={bg} alt="" className='w-100' />
                    <div className='position-absolute top-0 start-0 p-5 h-100 d-flex flex-column gap-4 justify-content-center'>
                        <h1>Create an Amazing Newspaper</h1>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className='btn btn-danger'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;