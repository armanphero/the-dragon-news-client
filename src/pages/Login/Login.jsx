import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/authProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    // console.log(location);
    // console.log(from);
    const handleLogin = (event) => {
        setErrorMessage('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result => {
            navigate(from, {replace: true})
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.code);
            setErrorMessage(error.code)
        })
    }
    return (
        <Container fluid className='bg-gray py-5'>
            <div className='w-50 mx-auto p-5 bg-white'>
                <h1 className='text-center'>Login your account</h1>
                <Form onSubmit={handleLogin} className='border-top pt-4 mt-4'>
                    <Form.Group controlId="formBasicEmail" className='mb-3'>
                        <Form.Label className='font-bold'>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name='email'
                            className='py-3'
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name='password'
                            className='py-3'
                        />
                    </Form.Group>
                    <p className='text-danger'>{errorMessage}</p>
                    <Button variant="primary" type="submit" className='w-100 py-3 fs-5 bg-black border border-0'>
                        Login
                    </Button>
                </Form>
                <p className='text-center mt-2 font-bold'>Dont’t Have An Account ? <Link to='/signup'>Register</Link></p>
            </div>
        </Container>
    );
};

export default Login;