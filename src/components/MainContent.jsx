import React from 'react';
import Home from './Home';
import Facebook from './Facebook';
import Twitter from './Twitter';

import Instagram from './Instagram';
import LinkedIn from './LinkedIn';
import YouTube from './Youtube';

const MainContent = () => {
    return (
        <div className="main-content">
            <main className="dashboard">
                <Home />
                <Facebook />
                <Twitter />
                <Instagram />
                <LinkedIn />
                <YouTube />
            </main>
        </div>
    );
};

export default MainContent;
