import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Social Media Dashboard</h1>
            <div className="auth-buttons">
                <div className="dropdown">
                    <button className="settings-btn">Settings</button>
                    <div className="dropdown-content">
                        <a href="#" id="profile"></a>
                        <a href="#">Settings</a>
                        <button id="logout">Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
