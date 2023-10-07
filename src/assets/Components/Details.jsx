// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const data  = useLoaderData();
    console.log(data);
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            asfetgtrfv
        </div>
    );
};

export default Details;