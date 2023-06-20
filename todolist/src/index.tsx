import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux';
import {
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import  Tsformtest  from './tscode/Tsformtest'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

root.render (
    <>
        {/* <React.StrictMode> */}
    </>
   
    /*
        <React.StrictMode>
            <Tsformtest/>
        </React.StrictMode>
    */
)