/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
const Clients = ({ client }) => {
    const { id, name, photo_url, passion, review, rating, bg_color } = client;
    return (
        <div>
            
            <div className="w-[300px] h-full relative rounded-lg" style={{ backgroundColor: bg_color, border: `solid 1px ${bg_color}` }}>

                <div className="h-full w-full bg-[#00000022] rounded-lg px-4 pt-4 pb-7">
                <div className="w-max h-max rounded-full border-[1.5px]  absolute top-0 left-0 ml-[65px] mt-[-75px]" style={{ border: `solid 7px ${bg_color}`, backgroundColor: 'white' }}>
                    <img className="rounded-full w-[150px]" src={photo_url} alt="" />

                </div>
                <div className="pt-[100px] text-white">
                    <h2 className="text-2xl font-bold text-center">{name}</h2>
                    <h3 className="text-lg font-sembibold text-center">{passion}</h3>
                    <h2 className='text-xl'>
                    <Rating
                        fullSymbol={<AiTwotoneStar></AiTwotoneStar>}
                        emptySymbol={<AiOutlineStar></AiOutlineStar>}
                        initialRating={rating}
                        readonly
                    />
                    </h2>
                    <p className="text-sm font-medium text-justify">{review}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;