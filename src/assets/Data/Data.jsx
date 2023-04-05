import React from 'react';
import { useNavigate } from 'react-router-dom';

const Data = ({main}) => {
console.log(main)
     const {area , capital , population , region , subregion , flags , name} = main;

     const navii = useNavigate();
     const GoBack = ()=>{
         navii(-1)
      
     }
    return (
        <div className='bg-purple-200 rounded-xl p-4'>
            <h2  className='text-2xl'>{name.common}</h2>
            <img className='w-[150px] mx-auto rounded-xl' src={flags.png} alt="" />
            <h2  className='text-2xl'>Capital : {capital}</h2>
            <h2  className='text-2xl'> Region : {region}</h2>
            <h2  className='text-xl font-semibold'>SubRegiobn :  {subregion}</h2>
            <h2  className='text-xl font-semibold'>Area :  {area}</h2>
            <h2  className='text-xl'>Population : <b> {population} </b></h2>
            <button onClick={GoBack} className='bg-orange-300 px-4  py-2 rounded-xl'>Go Back</button>
        </div>
    );
};

export default Data;