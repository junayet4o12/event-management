// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const data  = useLoaderData();
    const {id} = useParams();
    return (
        <div>
            
        </div>
    );
};

export default Details;