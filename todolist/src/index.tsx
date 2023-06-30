import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import routerformts01 from './tscode/router/routerformts01';
import GroupOrientation from './tscode/MaterialUI/mtuiButtonTest2';
import TimesFunc from './tscode/Hooks/useMemots01';
import TsUseHooks01 from './tscode/Hooks/TsUseHooks01';
import TsTextInputWithFocusButton01 from './tscode/Hooks/TsTextInputWithFocusButton01';
import TsUseCallback02 from './tscode/Hooks/TsUseCallback02';

//ag-grid
import AgGrid01 from './tscode/Ag-Grid/AgGrid01';
import AgGrid02 from './tscode/Ag-Grid/AgGrid02';


//JS
import Hooksusereducer02 from './jscode/day12_hooks/useReducerExp/hooksusereducer02'; 

import reportWebVitals from "./reportWebVitals";



import  Tsformtest  from './tscode/Tsformtest'
import AgGrid_Configure01 from './tscode/Ag-Grid/AgGrid_Configure01';

import AgGrid_Column_Groups01 from './tscode/Ag-Grid/Column/AgGrid_Column_Groups01';
import AgGrid_Column_Hearder01 from './tscode/Ag-Grid/Column/AgGrid_Column_Hearder01';
import AgGrid_Row_Group2 from './tscode/Ag-Grid/Row/AgGrid_Row_Group2';
import AgGrid_Columns_Up01 from './tscode/Ag-Grid/Column/AgGrid_Columns_Up01';
import AgGrid_Columns_Up_Sort01 from './tscode/Ag-Grid/Column/AgGrid_Columns_Up_Sort01';
import AgGrid_Column_Events01 from './tscode/Ag-Grid/Column/AgGrid_Column_Events01';
import AgGrid_Column_Filter01 from './tscode/Ag-Grid/Column/AgGrid_Column_Filter01';
import ShowBtnPage from './TestPj/ShowBtnPage';
import AgGrid_Row_Hight1 from './tscode/Ag-Grid/Row/AgGrid_Row_Hight1';
import Mui_Check1 from './tscode/MaterialUI/Mui_Check1';
import Mui_SelectDialog01 from './tscode/MaterialUI/Mui_SelectDialog01';
import PageGoTo from './PageGoTo';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

root.render (
  
   
    /*
        <React.StrictMode>
            <Tsformtest/>
        </React.StrictMode>
    */

    //使用Route的方式 路由
    <React.StrictMode>
        <PageGoTo />
        {/* <Router>
            <Routes>
                <Route  path='/' Component={PageGoTo} />
                <Route  path='/form' Component={routerformts01} />
                <Route path='/tfc' Component={TimesFunc} />
                <Route path='/tuh01' Component={TsUseHooks01} />
                <Route path='/focusbtn' Component={TsTextInputWithFocusButton01} />
                <Route path='/tuc2' Component={TsUseCallback02} />
                <Route path='/jshookredu2' Component={Hooksusereducer02} />
                <Route path='/aggrid1' Component={AgGrid01} />
                <Route path='/aggrid2' Component={AgGrid02} />
                <Route path='/aggrid_c' Component={AgGrid_Configure01} />
                <Route path='/aggrid_up' Component={AgGrid_Columns_Up01} />
                <Route path='/aggrid_upsort' Component={AgGrid_Columns_Up_Sort01} />
                <Route path='/aggrid_event1' Component={AgGrid_Column_Events01} />
                <Route path='/aggrid_filter' Component={AgGrid_Column_Filter01} />
                <Route path='/aggrid_group1' Component={AgGrid_Column_Groups01} />
                <Route path='/aggrid_hearder1' Component={AgGrid_Column_Hearder01} />
                <Route path='/aggrid_group2' Component={AgGrid_Row_Group2} />
                <Route path='/showbtnpage' Component={ShowBtnPage} />
                <Route path='/aggrid_rowh1' Component={AgGrid_Row_Hight1} />
                <Route path='/muicheck1' Component={Mui_Check1} />
                <Route path='/muidialog1' Component={Mui_SelectDialog01} /> 
            </Routes>
        </Router>*/}
    </React.StrictMode>

    
);


