import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import Admin from './components/admin/Admin';
import Signup from './components/signup/Signup';
import Jobs from './components/jobs/Jobs';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Jobs-ATM" element={<App />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobs" element={<Jobs />} />
            {/* <Route index element={<Home />} />
                <Route path="teams" element={<Teams />}>
                    <Route path=":teamId" element={<Team />} />
                    <Route path="new" element={<NewTeamForm />} />
                    <Route index element={<LeagueStandings />} />
                </Route> */}
            {/* <Route path="/kiosk" element={<Kiosk />} /> */}
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
