

import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Home";
import Details from "./Details";

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
                loader : ()=> fetch('./data.json'),
                element: <Details></Details>
            }
        ]
    },
]);

export default MyRouts;