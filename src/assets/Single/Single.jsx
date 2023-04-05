import React from 'react';
import { Link } from 'react-router-dom';

const Single = ({ main }) => {
    const {cca3, area , capital , region , name , flags} = main;
    return (
        <div className='bg-red-200 m-5 rounded-xl p-4'>
          <h2 className='text-2xl font-semibold'>Name :{name.common}</h2>
          <img className='mx-auto' src={flags.png} alt="" />
          <h2 className='text-xl font-semibold'>Capital :{capital}</h2>
          <h2 className=' font-semibold'>Region  :{region}</h2>
          <Link to={`/btn-details/${capital}`} ><button className='bg-orange-400 text-white px-4 rounded-xl py-2'>Details</button></Link>
        </div>
    );
};

export default Single;