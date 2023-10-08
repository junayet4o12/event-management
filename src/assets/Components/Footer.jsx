import React from 'react';
import logo from '../logo1.png';
import { FaFacebookSquare, FaGooglePlusSquare, FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className='bg-[#393934]  relative h-[300px]'>
            <footer className="footer footer-center p-10  text-primary-content">
                <img className='w-[200px]' src={logo} alt="" />
                <p className='text-orange-100 md:w-[600px]'>Elevate your social events with our expert event management. From birthdays to reunions, we create unforgettable experiences. Let us make your next gathering truly special.</p>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a className='text-2xl text-blue-500 cursor-pointer bg-[#eadada] rounded h-[26px] w-[26px]  flex justify-center items-center'><FaFacebookSquare></FaFacebookSquare></a>
                        <a className='text-2xl bg-blue-500 cursor-pointer  text-[#eadada] rounded h-[26px] w-[26px] flex  justify-center items-center'><FaGooglePlusSquare></FaGooglePlusSquare></a>
                        <a className='text-2xl text-black cursor-pointer bg-[#eadada] rounded h-[26px] w-[26px]  flex justify-center items-center'><FaSquareXTwitter></FaSquareXTwitter></a>
                        <a className='text-2xl bg-[#eadada] cursor-pointer text-gray-700 rounded h-[26px] w-[26px]  flex justify-center items-center'><FaGithubSquare></FaGithubSquare></a>

                    </div>
                </nav>
            </footer>
            <footer className='py-5 bg-black px-10 flex justify-center items-center'>
                <small className='text-orange-100 md:w-[600px] text-center'>© 2023 My Event RAP Company. All Rights Reserved.</small>
            </footer>

        </div>

    );
};

export default Footer;





  