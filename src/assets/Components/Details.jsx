/* eslint-disable no-unused-vars */
// import React from 'react';


import { useState } from "react";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';
const Details = () => {
    const [seemore, setseemore] = useState(true);
    const data = useLoaderData();
    const { id } = useParams();
    const idint = parseInt(id);
    const card = data?.find(card => card?.id === idint)

    const handleseemore = () => {
        setseemore(!seemore);
    }

    const { name, title, description, img, bg_color, text_color, button_bg, rating, margin } = card;
    const bgcolor = {
        backgroundColor: bg_color,

    }
    const textcolor = {
        color: button_bg
    }
    const btncolor = {
        backgroundColor: button_bg
    }
    return (
        <div className="py-20" style={bgcolor}>
            <div >
                <div className="text-center mb-7">
                    <h1 className="text-4xl font-bold mb-4">{name}</h1>
                    <h2 className="text-2xl font-medium">{title}</h2>
                </div>
                <div className=" ">
                    <img className="h-full rounded sm:h-[400px] mx-auto" src={img} alt="" />
                </div>
                <p className="text-3xl text-center  p-4 md:w-[700px] mx-auto flex justify-center items-center flex-wrap gap-2" style={textcolor}> <span className="text-2xl font-bold">Rating: </span>
                    <Rating
                        fullSymbol={<AiTwotoneStar></AiTwotoneStar>}
                        emptySymbol={<AiOutlineStar></AiOutlineStar>}
                        initialRating={rating}
                        readonly
                    />
                </p>
                <p className="p-4 md:w-[700px] mx-auto text-justify font-medium">{
                    seemore ? description.slice(0, 200) : description
                }
                    {
                        seemore ? '......' : ''
                    }
                    <br></br><span onClick={handleseemore} className={` hover:text-orange-600 font-bold cursor-pointer`} style={textcolor}>{
                        seemore ? 'See more' : 'See less'
                    }</span>
                    <div>
                        <button className="btn text-white font-bold text-sm  border-none mt-7" style={btncolor}>Purchase</button>
                    </div>
                </p>

            </div>
        </div>
    );
};

export default Details;