// import React from 'react';

import { useEffect, useState } from "react";
import Services from "./Services";
import Aos from "aos";
import "aos/dist/aos.css";
const Service = () => {
    const [service, setservice] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setservice(data))
    },[])
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="max-w-7xl mx-auto overflow-x-hidden">
            <div className="w-full px-7 my-20">
                <h2 className="text-center text-6xl font-bold mb-7" data-aos="fade-down">Our Services</h2>
                {
                service.map(services=><Services key={services.id} services={services}></Services>)
                }
            </div>
        </div>
    );
};

export default Service;