import React from 'react';
import logo from '../assets/img/logo.png'
function NavBar(props) {
    const boldfont = "text-white text-lg font-bold";
    return (
        <nav className='flex flex-row bg-black p-4'>
            {/* Logo */}
            <div className='xl:basis-3/4 md:basis-2/4 sm:basis-1/2 w-8  flex flex-row md:ml-20 mb-2 sm:ml-0'>
                <img src={logo} alt="logo" className='h-10 w-10' />
                <div className='mt-3'>
                    <span className='text-white text-lg font-bold'>Emergency</span>
                    <span className='border-solid border-r-2 m-3 h-7 object-top'></span>
                    <span className='text-white font-semibold'>Help Center</span>
                </div>
            </div>

            <div className='xl:basis-1/4 md:basis-2/4 sm:basis-1/2 flex flex-row space-x-4'>
                <button className='basis-2/4 text-white border-2 border-white rounded-lg hover:text-indigo-300 hover:border-indigo-300'>
                    Submit a Request
                </button>

                <button className='basis-2/4 text-white border-2 border-white rounded-lg bg-indigo-500 hover:bg-indigo-600'>
                    Sign In
                </button>
            </div>



        </nav>
    );
}

export default NavBar;