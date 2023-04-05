import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='text-3xl font-semibold text-orange-400 mr-4' to='/'>Home</Link>
            <Link className='text-3xl font-semibold text-blue-600 mr-4' to='/country'>Country</Link>
           
        </div>
    );
};

export default Header;