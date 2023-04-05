import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Single from '../Single/Single';

const Country = () => {
    const countries = useLoaderData();
    // console.log(countries)
    return (
        <div>
            <h2 className='text-2xl font-bold'>All country : {countries.length}</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
                {
                    countries.map(m => <Single key={m.cca3} main={m}></Single>)
                }
            </div>
        </div>
    );
};

export default Country;