import React from 'react';

const Navbar = () => {
    const navItems = [
        { id: 1, text: 'Home', href: '/' },
        { id: 2, text: 'Fraud Detector', href: '/fraud' },
        { id: 3, text: 'Fraud Reports', href: '/fraud' },
        { id: 3, text: 'Resources', href: '/fraud' },
    ];

    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 text-black '>
            {/* Logo */}
            <img src="scotia-tangerine.png" className='w-[300px]' alt='Scotiabank Logo' />

            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:bg-[#ff0000] rounded-xl m-4 cursor-pointer duration-300 hover:text-white'
                    >
                        <a href={item.href}>
                        {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;