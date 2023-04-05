import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quize = () => {
    const quize = useLoaderData();
    console.log(...quize)
    return (
        <div>
            <h2>this is wuicxnsd</h2>
            <div>
                {
                    quize.map(m=>console.log(m))
                }
            </div>
        </div>
    );
};

export default Quize;