import React from 'react';
import BangladeshMap from './BangladeshMap';
import { useLoaderData } from 'react-router';


const Coverage = () => {

    const serviceCenters = useLoaderData();
    //console.log(serviceCenters);
    return (
        <div className='max-w-4xl mx-auto px-4 py-10'>
            <h1>We are available in 64 district</h1>
            <BangladeshMap  serviceCenters={serviceCenters}/>
        </div>
    );
};

export default Coverage;