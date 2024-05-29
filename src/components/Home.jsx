import React, { useState } from 'react';

const Home = () => {
    const [showAddAccount, setShowAddAccount] = useState(false);

    const handleAddAccount = () => {
        setShowAddAccount(true);
    };

    return (
        <div id="Home" className="dashboard-section active">
            <div className="user-info">
                <img src="profile-pic-placeholder.png" alt="Profile Picture" className="profile-pic" />
                <h2>Welcome, User!</h2>
                <p>You are currently connected to the following social media accounts:</p>
                <ul id="connectedAccounts">
                    {/* List of connected accounts */}
                </ul>
                <button className="add-account-btn" id="addaccount" onClick={handleAddAccount}>
                    + Add Account
                </button>
                {showAddAccount && (
                    <div id="addAccountForm">
                        <h3>Add New Account</h3>
                        <form>
                            <label htmlFor="new-platform">Select Platform:</label>
                            <select id="new-platform">
                                <option value="facebook">Facebook</option>
                                <option value="twitter">Twitter</option>
                                <option value="instagram">Instagram</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="youtube">YouTube</option>
                            </select>
                            <button type="submit">Add Account</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
