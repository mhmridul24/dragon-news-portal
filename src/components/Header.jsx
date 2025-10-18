import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='mt-5' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-semibold'> 
                <span className='text-black'>{format(new Date(), 'EEEE,')}</span> <span>{format(new Date(), 'MMMM dd, yyyy')}</span>
            </p>
        </div>
    );
};

export default Header;