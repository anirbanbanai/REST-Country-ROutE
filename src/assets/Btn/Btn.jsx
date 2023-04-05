import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';

const Btn = () => {
    const load = useLoaderData();
    return (
        <div>
            {
                load.map(m=> <Data key={m.cca3} main={m}></Data>)
            }
        </div>
    );
};

export default Btn;