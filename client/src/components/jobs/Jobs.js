import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../navbar/NavBar';
import JobCard from './JobCard';

const Jobs = () => {
    const [jobDetails, setJobDetails] = useState({
        thumbnail: '',
        title: '',
        description: '',
    });
    
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8910/v1/api/job/all')
            .then(res => {
                // console.log(res.data);
                setJobList(res.data);     
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <h1>All jobs</h1>
                <div className="d-flex bd-highlight mt-4 flex-wrap justify-content-start">
                    {jobList.map(job => <JobCard key={job.id} details={job} />)}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
