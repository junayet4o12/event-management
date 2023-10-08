

import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Home";
import Details from "./Details";
import Contact from "./Contact";
import PurchaseItems from "./PurchaseItems";
import Details2 from "./Details2";
import LogIn from "./LogIn";

const MyRouts = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                loader : ()=> fetch('/data.json'),
                element: <Details></Details>
            },
            {
                path: '/details2/:id',
                loader : ()=> fetch('/data.json'),
                element: <Details2></Details2>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/purchased',
                loader: ()=> fetch('/data.json'),
                element: <PurchaseItems></PurchaseItems>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            }
        ]
    },
]);

export default MyRouts;