import React from 'react';
import {NavLink} from "react-router-dom"
import './Header.css'
const Header = () => {
    return (
        <nav className='flex justify-between px-24 py-4 font-semibold text-yellow-500 bg-gray-300'>
            <h2 className='text-3xl  '>Quiz Ultra</h2>
            <div >
            <NavLink className={({isActive})=> isActive ? 'active' : undefined}  to='/home'>Home</NavLink>
            <NavLink className='mx-4' to='/statistics'>Statistics</NavLink>
            <NavLink  to='/blogs'>Blogs</NavLink>
            </div>
        </nav>
        
    );
};

export default Header;