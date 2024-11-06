// Dashboard.js
import React, { useState } from 'react';
import JobOpening from './JobOpening';
import CandidateCard from './CandidateCard';
import './Dashboard.css';

function Dashboard() {
    const [jobOpenings] = useState([
        { title: 'Data Analyst', positions: 3 },
        { title: 'Product Designer', positions: 4 },
        { title: 'HR Executive', positions: 2 },
        { title: 'React Developer', positions: 3 },
    ]);

    const [selectedCandidates] = useState([
        { name: 'Satheesh Kumar', email: 'satheesh20@gmail.com', score: 9.5, joinIn: '1 Month' },
        { name: 'Rajat Kumar Sahoo', email: 'rajat123@gmail.com', score: 9.0, joinIn: '25 Days' },
    ]);

    const [shortlistedCandidates] = useState([
        { name: 'Aditi Nayak', email: 'aditi345@gmail.com', score: 8.0 },
        { name: 'Monalisha Dash', email: 'mona890@gmail.com', score: 8.5 },
        // Add more candidates as needed
    ]);

    return (
        <div className="dashboard">
            <div className="stats">
                <div className="stat-card total-candidates">Total Candidates: 24</div>
                <div className="stat-card selected-candidates">Selected Candidates: 15</div>
            </div>

            <div className="job-openings">
                <h3>New Openings</h3>
                {jobOpenings.map((job, index) => (
                    <JobOpening key={index} job={job} />
                ))}
            </div>

            <div className="candidates">
                <h3>Selected Candidates</h3>
                <div className="candidate-list">
                    {selectedCandidates.map((candidate, index) => (
                        <CandidateCard key={index} candidate={candidate} />
                    ))}
                </div>
                
                <h3>Shortlisted Candidates</h3>
                <div className="candidate-list">
                    {shortlistedCandidates.map((candidate, index) => (
                        <CandidateCard key={index} candidate={candidate} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
