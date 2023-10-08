

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
import Register from "./Register";
import PrivateRouts from "./PrivateRouts";
import Error from "./Error";

const MyRouts = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/details/:id',
                loader : ()=> fetch('/data.json'),
                element: <PrivateRouts><Details></Details></PrivateRouts>
            },
            {
                path: '/details2/:id',
                loader : ()=> fetch('/data.json'),
                element: <PrivateRouts><Details2></Details2></PrivateRouts>
            },
            {
                path: '/contact',
                element: <PrivateRouts><Contact></Contact></PrivateRouts>
            },
            {
                path: '/purchased',
                loader: ()=> fetch('/data.json'),
                element: <PrivateRouts><PurchaseItems></PurchaseItems></PrivateRouts>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default MyRouts;