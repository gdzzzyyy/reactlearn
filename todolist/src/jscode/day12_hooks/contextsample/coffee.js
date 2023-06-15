import React from "react";
import {themes, ThemesContext} from './context'
import Toolbar  from "./child/toolbar";
import ReactDOM from 'react-dom/client';

function Coffee  () {
    return (
         <ThemesContext.Provider value={themes.dark} >
            <Toolbar />
         </ThemesContext.Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Coffee />)
export default Coffee;