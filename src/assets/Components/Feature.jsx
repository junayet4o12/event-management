// import React from 'react';
import { useEffect, useState } from 'react';
import { FaHandshake, FaChampagneGlasses, FaHatWizard, FaLightbulb } from 'react-icons/fa6';
import { GiBalloons } from 'react-icons/gi';
import { IoLogoWhatsapp } from 'react-icons/io';
import Aos from "aos";
import "aos/dist/aos.css";
const Feature = () => {
    const [colour, setcolour] = useState('black');
    const [colour2, setcolour2] = useState('black');
    const [colour3, setcolour3] = useState('black');
    const [colour4, setcolour4] = useState('black');
    const [colour5, setcolour5] = useState('black');
    const [colour6, setcolour6] = useState('black');

    useEffect(() => {
        Aos.init();
    }, []);
    // div 1
    const handlecolor = () => { setcolour('white') }
    const handlprecolor = () => { setcolour('black') }
    const textcolor = { color: colour }
    // div 2
    const handlecolor2 = () => { setcolour2('white') }
    const handlprecolor2 = () => { setcolour2('black') }
    const textcolor2 = { color: colour2 }
    // div 3
    const handlecolor3 = () => { setcolour3('white') }
    const handlprecolor3 = () => { setcolour3('black') }
    const textcolor3 = { color: colour3 }
    // div 4
    const handlecolor4 = () => { setcolour4('white') }
    const handlprecolor4 = () => { setcolour4('black') }
    const textcolor4 = { color: colour4 }
    // div 5
    const handlecolor5 = () => { setcolour5('white') }
    const handlprecolor5 = () => { setcolour5('black') }
    const textcolor5 = { color: colour5 }
    // div 6
    const handlecolor6 = () => { setcolour6('white') }
    const handlprecolor6 = () => { setcolour6('black') }
    const textcolor6 = { color: colour6 }
    return (
        <div className='mb-10 max-w-7xl mx-auto' >
            <h2 className="text-6xl font-bold text-center mb-7" data-aos = "fade-up">About Us</h2>
            <div className="flex gap-6 justify-center items-center flex-col md:flex-row p-4">
                <div className="md:w-1/3" data-aos="fade-up-left">
                    <div className='max-w-md mx-auto'>
                        <h3 className="text-xl text-gray-500 font-medium mb-4 mx-auto">WE ARE EVENT RAP</h3>
                        <h1 className="text-4xl font-medium"><span className="font-bold">No.1</span>  Events Management</h1>
                        <p className="text-sm font-medium mt-5 text-justify max-w-[400px]"><span className="font-bold ">Event Rap: Crafting Unforgettable Social Events</span> <br />  We specialize in transforming your social gatherings into extraordinary experiences. With a keen eye for detail and a touch of creativity, we make your moments truly memorable. From weddings to birthdays, we orchestrate joyous occasions. Let us be the architects of your cherished memories.</p>
                    </div>
                </div>

                <div className="md:w-2/3 flex flex-wrap justify-center items-center gap-5 "  data-aos="fade-up-right">
                    {/* div1 */}
                    <button className="btn bg-white w-[200px] h-[200px] flex flex-col cursor-pointer justify-center items-center gap-2 rounded-md text-orange-500 hover:text-white hover:bg-gradient-to-br hover:from-[#ecbd22] hover:to-[#f17807] transition-all duration-1000   shadow-xl hover:shadow-2xl" onMouseOver={handlecolor} onMouseLeave={handlprecolor}>
                        <p className='text-5xl '><FaHandshake></FaHandshake></p>
                        <h2 style={textcolor} className='font-medium text-lg'>Friendly Team</h2>
                        <p style={textcolor} className='text-sm' >More than 200 teams</p>
                    </button>
                    {/* div2 */}
                    <div className="btn bg-white w-[200px] h-[200px] flex flex-col cursor-pointer justify-center items-center gap-2 rounded-md text-orange-500 hover:text-white hover:bg-gradient-to-br hover:from-[#ecbd22] hover:to-[#f17807] transition-all duration-1000 shadow-xl hover:shadow-2xl" onMouseOver={handlecolor2} onMouseLeave={handlprecolor2}>
                        <p className='text-5xl '><GiBalloons></GiBalloons></p>
                        <h2 style={textcolor2} className='font-medium text-lg'>Perfect Veneues</h2>
                        <p style={textcolor2} className='text-sm'>Perfect Veneues</p>
                    </div>
                    {/* div3 */}
                    <div className="btn bg-white w-[200px] h-[200px] flex flex-col cursor-pointer justify-center items-center gap-2 rounded-md text-orange-500 hover:text-white hover:bg-gradient-to-br hover:from-[#ecbd22] hover:to-[#f17807] transition-all duration-1000  shadow-xl hover:shadow-2xl" onMouseOver={handlecolor3} onMouseLeave={handlprecolor3}>
                        <p className='text-5xl '><FaChampagneGlasses></FaChampagneGlasses></p>
                        <h2 style={textcolor3} className='font-medium text-lg'>Unique Scenario</h2>
                        <p style={textcolor3} className='text-sm text-center'>We thinking out of the box</p>
                    </div>
                    {/* div4 */}
                    <div className="btn bg-white w-[200px] h-[200px] flex flex-col cursor-pointer justify-center items-center gap-2 rounded-md text-orange-500 hover:text-white hover:bg-gradient-to-br hover:from-[#ecbd22] hover:to-[#f17807] transition-all duration-1000 shadow-xl hover:shadow-2xl" onMouseOver={handlecolor4} onMouseLeave={handlprecolor4}>
                        <p className='text-5xl '><FaHatWizard></FaHatWizard></p>
                        <h2 style={textcolor4} className='font-medium text-lg'>Unforgettable Time</h2>
                        <p style={textcolor4} className='text-sm'>We make you perfect event</p>
                    </div>
                    {/* div5 */}
                    <div className="btn bg-white w-[200px] h-[200px] flex flex-col cursor-pointer justify-center items-center gap-2 rounded-md text-orange-500 hover:text-white hover:bg-gradient-to-br hover:from-[#ecbd22] hover:to-[#f17807] transition-all duration-1000 shadow-xl hover:shadow-2xl" onMouseOver={handlecolor5} onMouseLeave={handlprecolor5}>
                        <p className='text-5xl '><IoLogoWhatsapp></IoLogoWhatsapp></p>
                        <h2 style={textcolor5} className='font-medium text-lg'>24/7 hours support</h2>
                        <p style={textcolor5} className='text-sm'>Any time anywhere</p>
                    </div>
                    {/* div6 */}
                    <div className="btn bg-white w-[200px] h-[200px] flex flex-col cursor-pointer justify-center items-center gap-2 rounded-md text-orange-500 hover:text-white hover:bg-gradient-to-br hover:from-[#ecbd22] hover:to-[#f17807] transition-all duration-1000 shadow-xl hover:shadow-2xl" onMouseOver={handlecolor6} onMouseLeave={handlprecolor6}>
                        <p className='text-5xl '><FaLightbulb></FaLightbulb></p>
                        <h2 style={textcolor6} className='font-medium text-lg'>Brilliant Idea</h2>
                        <p style={textcolor6} className='text-sm'>We have million idea</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;