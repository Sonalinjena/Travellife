// CandidateCard.js
import React from 'react';
import './CandidateCard.css';

function CandidateCard({ candidate }) {
    return (
        <div className="candidate-card">
            <h4>{candidate.name}</h4>
            <p>{candidate.email}</p>
            <p>Score: {candidate.score} out of 10</p>
            {candidate.joinIn && <p>Ready to Join: {candidate.joinIn}</p>}
            <button className="action-button">Make Call</button>
            <button className="action-button">Release Offer</button>
        </div>
    );
}

export default CandidateCard;
