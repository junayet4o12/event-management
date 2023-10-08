// import React from 'react';

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const LayOut = () => {
    return (
        <div className="">
            <div className="sticky top-0 z-40">
                <div className="absolute w-full">
                    <NavBar></NavBar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;