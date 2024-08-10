import React from 'react';

const Navbar = () => {
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Fraud Detector' },
        { id: 3, text: 'Resources' },
    ];

    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 text-black bg-gray-50'>
            {/* Logo */}
            <img src="scotia-logo.webp" className='w-[300px]' alt='Scotiabank Logo' />

            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:bg-[#ff0000] rounded-xl m-4 cursor-pointer duration-300 hover:text-white'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;