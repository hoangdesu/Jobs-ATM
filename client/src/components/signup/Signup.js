import React, { useState, useRef } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import NavBar from '../navbar/NavBar';

const Signup = () => {
    const [selectedRole, setSelectedRole] = useState('Select role');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const phonRef = useRef(null);
    const locationRef = useRef(null);
    const titleRef = useRef(null);

    const formSignupHandler = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value, nameRef.current.value, phonRef.current.value);
   }

    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#E9E9E9'}}>
            <NavBar />
            <div className="container-sm bg-light">
                <h1 className="m-5 text-center">Jobs ATM Signup</h1>
                <Form onSubmit={formSignupHandler}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            ref={passwordRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" ref={nameRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Your phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            ref={phonRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLocation">
                        <Form.Label>Your location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Example: Ho Chi Minh city, Ha Noi,..."
                            ref={locationRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Your title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Example: Software developer, IT manager, Data scientist,..."
                            ref={titleRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRole">
                        <Form.Label>Your role</Form.Label>
                        <Dropdown onSelect={(e) => setSelectedRole(e)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {selectedRole}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey={'Employee'}>
                                    Employee
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={'Employer'}>
                                    Employer
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <Button className="mt-2" variant="primary" type="submit">
                        Signup
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Signup;
