import React from 'react';
import ReactDOM from 'react-dom/client';

import  Tsformtest  from './tscode/Tsformtest'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

root.render (
    <React.StrictMode>
        <Tsformtest/>
    </React.StrictMode>
)