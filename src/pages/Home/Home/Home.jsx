import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogoMarquee/ClientLogosMarquee';
import Benefits from '../Benefits/Benefits';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ClientLogosMarquee />
            <Benefits />
        </div>
    );
};

export default Home;