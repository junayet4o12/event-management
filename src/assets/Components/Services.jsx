/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const Services = ({ services }) => {
    const { id, name,  description, img, bg_color,  button_bg,  margin } = services;

   
    const btncolor = {
        backgroundColor: button_bg
    }
    return (
        <div>
            <div className="hero  w-full sm:max-w-5xl  sm:w-[90%] lg:w-[80%] h-max  mb-7 rounded" style={{
                marginLeft: margin === 'marginLeft' ? 'auto' : 'unset',
                marginRight: margin === 'marginRight' ? 'auto' : 'unset',
                backgroundColor: bg_color,

            }}>
                <div className="hero-content flex-col md:flex-row">
                    <img className="w-[300px] sm:w-[350px] md:w-[380px] lg:w-[400px]" src={img} />
                    <div className="p-2 sm:p-0">
                        <div className="">
                            <h1 className="text-3xl font-bold ">{name}</h1>
                            <p className="py-6 font-medium">{description.slice(0, 200)}.....</p>
                            <div className="text-end">
                                <Link to={`/details/${id}`}>
                                    <button className="btn btn-primary font-bold text-white border-none" style={btncolor}>See details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;