import React, { useContext } from 'react';
import logo from '../logo1.png';
import userpic from '../user.png';
import './Nav.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user, logout);
    const navli = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/purchased'>PURCHASED</NavLink></li>
        <li><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink to='/register'>REGISTER</NavLink></li>
    </>

    return (
        <div className='bg-[#00000063]'>
            <div className="navbar max-w-7xl mx-auto">
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
                    {
                        user ? <>
                            <div className='mr-5  flex flex-col justify-center items-center'>
                                <div className='w-10 h-10 rounded-full '><img className='w-full h-full rounded-full ' src={user.photoURL ? user?.photoURL : userpic
} alt="" /></div>
                                <p className='text-white font-bold font-sm'>{user?.displayName?.split(' ')[0] || 'Undefined'}</p>
                            </div>
                            <button onClick={() => logout()} className="btn bg-gradient-to-br from-[#eae751] to-[#f17807] text-white font-bold border-none px-5">log out</button>

                        </> : <Link to='/login'>
                            <button className="btn bg-gradient-to-br from-[#eae751] to-[#f17807] text-white font-bold border-none px-5">log in</button>
                        </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;