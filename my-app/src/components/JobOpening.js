// JobOpening.js
import React from 'react';
import './JobOpening.css';

function JobOpening({ job }) {
    return (
        <div className="job-opening">
            <h4>{job.title}</h4>
            <p>No. of positions: {job.positions}</p>
            <button className="invite-button">Invite Candidate</button>
        </div>
    );
}

export default JobOpening;
