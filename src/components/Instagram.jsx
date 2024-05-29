import React from 'react';

const Instagram = () => {
    return (
        <div id="Instagram" className="dashboard-section">
            <h2>Instagram</h2>
            <div className="auth-button-container">
                <button className="signin-btn" onClick={() => loginWithInstagram()}>
                    Login with Instagram
                </button>
            </div>
            {/* Instagram content */}
        </div>
    );
};

const loginWithInstagram = () => {
    window.open('https://www.instagram.com/accounts/login/', '_blank');
};

export default Instagram;
