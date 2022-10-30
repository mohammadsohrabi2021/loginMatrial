import React from "react";
import {RouterProvider} from "react-router-dom";
import rout from './routes/router'

function App() {
    return (
        <RouterProvider router={rout} />
    );
}

export default App;
