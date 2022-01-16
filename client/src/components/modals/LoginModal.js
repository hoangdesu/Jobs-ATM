import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function LoginModal(props) {
    const [,] = useState();
    const emailRef = useRef(null);
    const pwdRef = useRef(null);
    const navigate = useNavigate();

    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        console.log(' :D');
        navigate('/admin');
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>For {props.category.name}</h4>
                <p>{props.category.description}</p>
                <form onSubmit={onFormSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter username"
                            ref={emailRef}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your password"
                            ref={pwdRef}
                        />
                    </div>
                    <div className="form-group mt-1">
                        <label htmlFor="inputPIN">PIN code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPIN"
                            placeholder="Enter your PIN code"
                            ref={pwdRef}
                        />
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Remember me
                        </label>
                    </div>
                    
                    <div className="mt-3">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                        <span className="m-2">
                            No account? <Link to="/signup" target="_blank">Sign up</Link>
                        </span>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
