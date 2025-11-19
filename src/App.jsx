import './App.css';

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Videos from "./pages/Videos.jsx";
import Root from "./pages/Root.jsx";

function App() {
    const router = createBrowserRouter([
            {
                id: "root",
                path: "/",
                element: (
                    <>
                        <Root/>
                    </>
                ),
                errorElement: <NotFound/>,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        id: "videos",
                        path: "/videos",
                        errorElement: <NotFound/>,
                        element: <Videos/>
                    }
                ]
            },

        ])
    ;
    return <RouterProvider router={router}/>
}

export default App
