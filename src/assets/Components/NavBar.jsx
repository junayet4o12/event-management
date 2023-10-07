import React from 'react';
import logo from '../logo1.png';
import './Nav.css'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const navli = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/selected'>SELECTED</NavLink></li>
        <li><NavLink to='/register'>REGSITER</NavLink></li>
        <li><NavLink to='/login'>LOGIN</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-[#00000063]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" hello dropdown-content mt-3 z-[1] p-2 shadow bg-[#00000090] rounded-box w-max flex justify-center items-center flex-col gap-5 px-4 py-5 text-white text-[13px]">
                            {navli}
                        </ul>
                    </div>
                    <img className='w-[100px]' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="hello2 flex flex-wrap gap-5 text-white font-medium text-sm">
                        {navli}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-br from-[#eae751] to-[#f17807] text-white font-bold border-none px-5">log in</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;