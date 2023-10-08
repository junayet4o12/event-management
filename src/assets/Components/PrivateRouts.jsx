/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouts = ({ children}) => {
    const { user, loading  } = useContext(AuthContext);
    if(loading){
        return <div className="h-[70vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg text-orange-600"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouts;