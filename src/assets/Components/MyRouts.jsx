

import {
    createBrowserRouter,
} from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Home";

const MyRouts = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default MyRouts;