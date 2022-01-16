import React, { useState } from 'react';
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import LoginModal from '../modals/LoginModal';

const NavBar = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Jobs ATM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/jobs">All jobs</Nav.Link>
                            <NavDropdown
                                title="Jobs by category"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/jobs?category=it">
                                    IT/Technology
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/jobs?category=tourism">
                                    Tourism
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/jobs?category=finance">
                                    Finance
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/jobs?category=accounting">
                                    Accounting
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex" variant="dark">
                            <Nav.Item>
                                <Nav.Link onClick={(() => setModalShow(true))}>Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                            </Nav.Item>
                            <FormControl
                                type="search"
                                placeholder="Job search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                category={{}}
            />
        </div>
    );
};

export default NavBar;
