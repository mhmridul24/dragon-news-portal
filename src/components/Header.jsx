import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='mt-5' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;