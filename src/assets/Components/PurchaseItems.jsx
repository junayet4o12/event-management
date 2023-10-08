// import React from 'react';

import { useLoaderData } from "react-router-dom";
import { getdata } from "./localstorage/LocalStorage";
import { useEffect, useState } from "react";
import Purchase from "./Purchase";
import { TbMoodEmpty } from 'react-icons/tb';
import Aos from "aos";
import "aos/dist/aos.css";
const PurchaseItems = () => {
    const [data, setdata] = useState([]);
    const [toggle , settoggle] = useState(true)
    const dataId = getdata();
    const datas = useLoaderData();
    console.log(dataId, datas);
    useEffect(() => {
        const newdata = [];
        for (let id of dataId) {
            const newdatum = datas?.find(datum => datum.id === id)
            newdata.push(newdatum);

        }
        setdata(newdata);
    }, [])
    useEffect(() => {
        Aos.init();
      }, []);
    const handleseemore = () => {
       settoggle(!toggle);
    }
    return (
        <div className="py-20">
            <h2 className="text-5xl font-bold text-center" data-aos="flip-left">Your Purchases Items</h2>
            <div className="flex flex-wrap justify-center items-center gap-7 p-4">
                {
                    data.slice(0, toggle ? 3 : data.length).map(datum => <Purchase key={datum.id} datum={datum}></Purchase>)
                }
            </div>
            <div className={`text-center ${data.length > 3 ? 'block' : 'hidden'}`}>
                <button onClick={handleseemore} className="btn bg-gradient-to-br from-[#ecbd22] to-[#f17807] hover:bg-gradient-to-br hover:to-[#ecbd22] hover:from-[#f17807] text-sm font-bold text-white my-4">
                    {
                        toggle ? 'See More' : 'See Less'
                    }</button>
            </div>

            <div className={`flex flex-col justify-center items-center h-[50vh] gap-4 ${!data.length>0 ? 'block' : 'hidden'}`}>
                <p className="text-8xl text-red-600 text-center"><TbMoodEmpty></TbMoodEmpty></p>
                <p className="text-2xl font-bold text-center ">There has been no purchase yet!!!</p>
            </div>
        </div>
    );
};

export default PurchaseItems;