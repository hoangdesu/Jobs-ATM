import React, { useState } from 'react';
import logo from './assets/logo.png';
import employeeBG from './assets/employee.jpg';
import employerBG from './assets/employer.jpg';
import employeeIc from './assets/employee-icon.png';
import employerIc from './assets/employer-icon.png';

import './App.scss';

import LoginModal from './components/modals/LoginModal';

const App = () => {
    const [modalShow, setModalShow] = useState(false);
    const [category, setCategory] = useState({
        name: '',
        description: '',
    });

    const btnClickHandler = (category) => {
        if (category === 'employee') {
            setCategory({
                name: category,
                description:
                    'Login to find the most recently posted jobs around you and apply for the job when you are ready!',
            });
        } else if (category === 'employer') {
            setCategory({
                name: category,
                description:
                    'Login to look for the most talents around you, set up interviews with them and post new jobs!',
            });
        }
        // setCategory(category);
        setModalShow(true);
    };
    return (
        <div
            className="kiosk"
            style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                color: 'rgb(250,254,254)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
            }}
        >
            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                category={category}
            />
            <div
                className="logo-container"
                style={{
                    position: 'absolute',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '30px',
                    // fontFamily: 'Roboto',
                    fontWeight: 'bold'
                }}
            >
                <img src={logo} alt="logo" className="kiosk logo" />
                {/* <h2>Jobs ATM</h2> */}
            </div>

            <div
                className="employee"
                style={{
                    background: `linear-gradient(0deg, rgba(13, 10, 141, 0.7), rgba(13, 10, 141, 0.7)), url(${employeeBG})`,
                    backgroundSize: 'cover',
                    boxSizing: 'border-box',
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '100px',
                }}
            >
                <img src={employeeIc} alt="employee" className="kiosk icon" />
                <h1>Employee</h1>
                <p>
                    Browse the jobs available, prepare your CV and apply for
                    your dream jobs
                </p>
                <button onClick={() => btnClickHandler('employee')}>
                    Get started
                </button>
            </div>
            <div
                className="employer"
                style={{
                    background: `linear-gradient(0deg, rgba(35, 160, 138, 0.7), rgba(35, 160, 138, 0.7)), url(${employerBG})`,
                    backgroundSize: 'cover',
                    boxSizing: 'border-box',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '100px',
                }}
            >
                <img src={employerIc} alt="employer" className="kiosk icon" />
                <h1>Employer</h1>
                <p>Browse potential candidates, set up interviews, connect with companies, post jobs</p>
                <button onClick={() => btnClickHandler('employer')}>
                    Get started
                </button>
            </div>
        </div>
    );
};

export default App;
