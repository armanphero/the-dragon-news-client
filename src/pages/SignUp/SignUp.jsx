import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvider/authProvider';

const SignUp = () => {
     
    const {createUser, updateUsersProfile} = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            updateUsersProfile(result.user, name, photoUrl)
        })
        .catch(error => {
            console.log(error.code);
        })
        
    }
    return (
        <Container fluid className='bg-gray py-5'>
            <div className='w-50 mx-auto p-5 bg-white'>
                <h1 className='text-center'>Register your account</h1>
                <Form onSubmit={handleSignUp} className='border-top pt-4 mt-4'>
                    <Form.Group controlId="formName" className='mb-3'>
                        <Form.Label className='font-bold'>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Name"
                            className='py-3'
                            name='name'
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhotoUrl" className='mb-3'>
                        <Form.Label className='font-bold'>Your Photo URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Photo URL"
                            className='py-3'
                            name='photo'
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className='mb-3'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='py-3'
                            name='email'
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className='py-3'
                            name='password'
                            required
                        />
                    </Form.Group>
                    <div key={`default-${'checkbox'}`} className="mb-3">
                        <Form.Check
                            type={'checkbox'}
                            id={`default-${'checkbox'}`}
                            label='Accept Term & Conditions'
                        />
                    </div>
                    <Button variant="primary" type="submit" className='w-100 py-3 fs-5 bg-black border border-0'>
                        Login
                    </Button>
                </Form>
                <p className='text-center mt-2 font-bold'>Already Have An Account ? <Link to='/login'>Login</Link></p>
            </div>
        </Container>
    );
};

export default SignUp;