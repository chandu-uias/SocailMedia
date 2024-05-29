import React from 'react';

const Twitter = () => {
    return (
        <div id="Twitter" className="dashboard-section">
            <h2>Twitter</h2>
            <div className="auth-button-container">
                <button className="signin-btn" onClick={() => loginWithTwitter()}>
                    Login with Twitter
                </button>
            </div>
            {/* Twitter content */}
        </div>
    );
};

const loginWithTwitter = () => {
    window.open('https://twitter.com/login', '_blank');
};

export default Twitter;
