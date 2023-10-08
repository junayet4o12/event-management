/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const Purchase = ({ datum }) => {
    const { name, title, description, img, bg_color, text_color, button_bg, rating, margin, price } = datum;
    return (
        <div>
            <div className="card w-[300px] sm:w-96 h-[250px] bg-base-100 shadow-xl image-full text-white">
                <figure><img className="w-full h-full" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">{name}</h2>
                    <h2 className="card-title text-white">{price} $</h2>
                    <p className="text-white font-medium text-sm">{title}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details2/${datum.id}`}>
                            <button className="btn btn-primary text-white text-sm font-bold border-none" style={{ backgroundColor: button_bg }}>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;