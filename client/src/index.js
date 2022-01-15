import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import Kiosk from './components/kiosk/Kiosk';

ReactDOM.render
(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
                {/* <Route index element={<Home />} />
                <Route path="teams" element={<Teams />}>
                    <Route path=":teamId" element={<Team />} />
                    <Route path="new" element={<NewTeamForm />} />
                    <Route index element={<LeagueStandings />} />
                </Route> */}

            <Route path="/kiosk" element={<Kiosk />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
