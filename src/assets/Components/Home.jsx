import { useEffect } from "react";
import Banner from "./Banner";

import Feature from "./Feature";
import Footer from "./Footer";
import Review from "./Review";
import Service from "./Service";


const Home = () => {

    return (
        <div className="">
            <Banner></Banner>
            <Service></Service>
            <Feature></Feature>
            <div>
                <Review></Review>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;