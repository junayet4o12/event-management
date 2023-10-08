// import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto py-14">
            <div className="p-4 sm:pl-10">
                <h2 className="text-2xl font-medium text-gray-600">CONTACT US</h2>
                <h1 className="text-5xl font-medium">Keep in touch <span className="font-bold">with Event Rap</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center gap-x-4 p-4 gap-y-7">
                <div className="w-full flex justify-center items-center">
                    <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-gray-100 border-[1px] rounded text-sm font-semibold" type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="w-full flex justify-center items-center">
                    <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-gray-100 border-[1px] rounded text-sm font-semibold" type="email" name="email" placeholder="Your Email" />
                </div>
                <div className="w-full flex justify-center items-center">
                    <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-gray-100 border-[1px] rounded text-sm font-semibold" type="text" name="country" placeholder="Your Country Name" />
                </div>
                <div className="w-full flex justify-center items-center">
                    <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-gray-100 border-[1px] rounded text-sm font-semibold" type="text" name="number" placeholder="Your Phone Number" />
                </div>
            </div>
            <div className="flex justify-center items-center mb-7">
                <textarea className=" border-[1.5px]  rounded-lg h-[200px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] p-4 text-sm font-semibold" placeholder="Write your experience...."></textarea>
            </div>
       <div className="text-center">
        <button className="btn rounded-r-full rounded-l-full bg-gradient-to-br from-[#ecbd22] to-[#f17807] hover:bg-gradient-to-br hover:to-[#ecbd22] hover:from-[#f17807] text-white font-bold text-sm">send email</button>
       </div>
        </div>
    );
};

export default Contact;