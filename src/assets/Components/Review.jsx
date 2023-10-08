// import React from 'react';

import { useEffect, useState } from "react";
import Clients from "./Clients";

const Review = () => {
    const [clients, setclients] = useState([]);

    const [truefalse, settruefalse] = useState(true);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setclients(data))
    }, []);
    const handleseemore = () => {
        settruefalse(!truefalse);
    }
    return (
        <div className='py-20 max-w-7xl mx-auto'>
            <div className="mb-24 p-4 md:p-10">
                <h2 className='text-5xl font-bold  mb-4 '>FEED BACK</h2>
                <p className="text-xl font-semibold text-gray-600">Some reviews of our client who took our services...</p>
            </div>
            <div className="flex flex-wrap justify-center  gap-x-10 gap-y-24">
                {
                    clients.slice(0, truefalse ? 3 : clients.length).map(client => <Clients key={client.id} client={client}></Clients>)
                }

            </div>
            <div className="text-center"><button onClick={handleseemore} className="btn bg-gradient-to-br from-[#ecbd22] to-[#f17807] hover:bg-gradient-to-br hover:to-[#ecbd22] hover:from-[#f17807] text-sm font-bold text-white my-4">{
                truefalse ? 'see more' : 'see less'
            }</button></div>
        </div>
    );
};

export default Review;