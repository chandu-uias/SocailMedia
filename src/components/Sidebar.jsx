import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </div>
            <ul className="tabs" id="sidebarTabs">
                <li>
                    <a href="#" className="tab active" onClick={(e) => openTab(e, 'Home')}>
                        <i className="fas fa-home"></i> Home
                    </a>
                </li>
                <li>
                    <a href="#" className="tab" onClick={(e) => openTab(e, 'Facebook')}>
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                </li>
                <li>
                    <a href="#" className="tab" onClick={(e) => openTab(e, 'Twitter')}>
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                </li>
                <li>
                    <a href="#" className="tab" onClick={(e) => openTab(e, 'Instagram')}>
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                </li>
                <li>
                    <a href="#" className="tab" onClick={(e) => openTab(e, 'LinkedIn')}>
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="#" className="tab" onClick={(e) => openTab(e, 'YouTube')}>
                        <i className="fab fa-youtube"></i> YouTube
                    </a>
                </li>
            </ul>
        </div>
    );
};

const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('active');
};

const openTab = (event, tabId) => {
    event.preventDefault();
    document.querySelectorAll('.dashboard-section').forEach((section) => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.tabs a').forEach((link) => {
        link.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
};

export default Sidebar;
