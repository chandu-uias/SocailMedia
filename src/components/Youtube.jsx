import React from 'react';

const YouTube = () => {
    return (
        <div id="YouTube" className="dashboard-section">
            <h2>YouTube</h2>
            <div className="auth-button-container">
                <button className="signin-btn" onClick={() => loginWithYouTube()}>
                    Login with YouTube
                </button>
            </div>
            {/* YouTube content */}
        </div>
    );
};

const loginWithYouTube = () => {
    window.open('https://accounts.google.com/ServiceLogin?service=youtube', '_blank');
};

export default YouTube;
