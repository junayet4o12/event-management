// import React from 'react';

const getdata = () => {
    const data = localStorage.getItem('purchaseDetails');
    if (data) {
        return JSON.parse(data);
    }
    return [];
};

const setdata = (id) => {
    const data = getdata();


    data.push(id);

    const newdata = JSON.stringify(data)
    localStorage.setItem('purchaseDetails', newdata)

}

export { setdata, getdata };