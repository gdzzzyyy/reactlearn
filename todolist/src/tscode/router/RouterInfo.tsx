import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import PageGoTo from "../../PageGoTo";
import ShowBtnPage from "../../TestPj/ShowBtnPage";
import AgGrid01 from "../Ag-Grid/AgGrid01";
import AgGrid02 from "../Ag-Grid/AgGrid02";
import AgGrid_Configure01 from "../Ag-Grid/AgGrid_Configure01";
import AgGrid_Column_Events01 from "../Ag-Grid/Column/AgGrid_Column_Events01";
import AgGrid_Column_Filter01 from "../Ag-Grid/Column/AgGrid_Column_Filter01";
import AgGrid_Column_Groups01 from "../Ag-Grid/Column/AgGrid_Column_Groups01";
import AgGrid_Column_Hearder01 from "../Ag-Grid/Column/AgGrid_Column_Hearder01";
import AgGrid_Columns_Up01 from "../Ag-Grid/Column/AgGrid_Columns_Up01";
import AgGrid_Columns_Up_Sort01 from "../Ag-Grid/Column/AgGrid_Columns_Up_Sort01";
import AgGrid_Row_Group2 from "../Ag-Grid/Row/AgGrid_Row_Group2";
import AgGrid_Row_Hight1 from "../Ag-Grid/Row/AgGrid_Row_Hight1";
import TsTextInputWithFocusButton01 from "../Hooks/TsTextInputWithFocusButton01";
import TsUseCallback02 from "../Hooks/TsUseCallback02";
import TsUseHooks01 from "../Hooks/TsUseHooks01";
import TimesFunc from "../Hooks/useMemots01";
import Mui_Check1 from "../MaterialUI/Mui_Check1";
import Mui_SelectDialog01 from "../MaterialUI/Mui_SelectDialog01";
import routerformts01 from "./routerformts01";

const RouterInfo  = () => {
    return (
        <Router>
            <Routes>
                <Route path='/form' Component={routerformts01} />
                <Route path='/tfc' Component={TimesFunc} />
                <Route path='/tuh01' Component={TsUseHooks01} />
                <Route path='/focusbtn' Component={TsTextInputWithFocusButton01} />
                <Route path='/tuc2' Component={TsUseCallback02} />
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
        </Router>
    )
}

export default RouterInfo;