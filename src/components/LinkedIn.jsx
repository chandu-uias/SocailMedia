import React from 'react';

const LinkedIn = () => {
  return (
    <div id="LinkedIn" className="dashboard-section">
      <h2>LinkedIn</h2>
      <div className="auth-button-container">
        <button className="signin-btn" onClick={() => loginWithLinkedIn()}>
          Login with LinkedIn
        </button>
      </div>
      {/* LinkedIn content */}
    </div>
  );
};

const loginWithLinkedIn = () => {
  window.open('https://www.linkedin.com/login', '_blank');
};

export default LinkedIn;
