import React from 'react';
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <nav className='flex justify-between px-24 py-4'>
            <h2 className='text-3xl font-semibold text-indigo-500'>Quiz Ultra</h2>
            <div>
            <NavLink className='mr-4' to='/'>Home</NavLink>
            <NavLink className='mr-4' to='/subjects'>Subjects</NavLink>
            <NavLink className='mr-4' to='/statistics'>Statistics</NavLink>
            <NavLink className='mr-4' to='/blogs'>Blogs</NavLink>
            </div>
        </nav>
        
    );
};

export default Header;