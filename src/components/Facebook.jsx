import React from 'react';

const Facebook = () => {
    return (
        <div id="Facebook" className="dashboard-section">
            <h2>Facebook</h2>
            <div className="auth-button-container">
                <button className="signin-btn" onClick={() => loginWithFacebook()}>
                    Login with Facebook
                </button>
            </div>
            {/* Facebook content */}
        </div>
    );
};

const loginWithFacebook = () => {
    window.open('https://www.facebook.com/login', '_blank');
};

export default Facebook;
