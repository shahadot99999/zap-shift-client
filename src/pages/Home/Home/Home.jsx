import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogoMarquee/ClientLogosMarquee';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ClientLogosMarquee />
        </div>
    );
};

export default Home;