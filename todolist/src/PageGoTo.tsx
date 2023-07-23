import { Button, ButtonGroup } from "@material-ui/core";
import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    NavLink,
    BrowserRouter,
    useNavigate
} from "react-router-dom";
import TimesFunc from './tscode/Hooks/useMemots01';
import GroupOrientation from './tscode/MaterialUI/mtuiButtonTest2';
import RouterInfo from "./tscode/router/RouterInfo";
import Mui_SelectDialog01 from "./tscode/MaterialUI/Mui_SelectDialog01";
import ShowBtnPage from "./TestPj/ShowBtnPage";
import AgGrid01 from "./tscode/Ag-Grid/AgGrid01";
import AgGrid02 from "./tscode/Ag-Grid/AgGrid02";
import AgGrid_Configure01 from "./tscode/Ag-Grid/AgGrid_Configure01";
import AgGrid_Column_Events01 from "./tscode/Ag-Grid/Column/AgGrid_Column_Events01";
import AgGrid_Column_Filter01 from "./tscode/Ag-Grid/Column/AgGrid_Column_Filter01";
import AgGrid_Column_Groups01 from "./tscode/Ag-Grid/Column/AgGrid_Column_Groups01";
import AgGrid_Column_Hearder01 from "./tscode/Ag-Grid/Column/AgGrid_Column_Hearder01";
import AgGrid_Columns_Up01 from "./tscode/Ag-Grid/Column/AgGrid_Columns_Up01";
import AgGrid_Columns_Up_Sort01 from "./tscode/Ag-Grid/Column/AgGrid_Columns_Up_Sort01";
import AgGrid_Row_Group2 from "./tscode/Ag-Grid/Row/AgGrid_Row_Group2";
import AgGrid_Row_Hight1 from "./tscode/Ag-Grid/Row/AgGrid_Row_Hight1";
import TsTextInputWithFocusButton01 from "./tscode/Hooks/TsTextInputWithFocusButton01";
import TsUseCallback02 from "./tscode/Hooks/TsUseCallback02";
import TsUseHooks01 from "./tscode/Hooks/TsUseHooks01";
import Mui_Check1 from "./tscode/MaterialUI/Mui_Check1";
import routerformts01 from "./tscode/router/routerformts01";
import HitAndBlowGame from "./HitAndBlowGame";
import HitAndBlowGame2 from "./HitAndBlowGamejilu";


const PageGoTo = () => {

    const navigate = useNavigate();

    const dialogBtn = () =>{
        console.log("aaaaaa")
        //return <Route path="/muidialog1"  Component={Mui_SelectDialog01} />
        
        navigate('./tscode/MaterialUI/Mui_SelectDialog01')
        
    }

    return (
        <Fragment>
            {/* <ButtonGroup variant="outlined">
                <Button onClick={dialogBtn}>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
            <HitAndBlowGame2 />
        </ Fragment>


        // <Router>
        //     <Routes>
        //         <Route path='/form' Component={routerformts01} />
        //         <Route path='/tfc' Component={TimesFunc} />
        //         <Route path='/tuh01' Component={TsUseHooks01} />
        //         <Route path='/focusbtn' Component={TsTextInputWithFocusButton01} />
        //         <Route path='/tuc2' Component={TsUseCallback02} />
        //         <Route path='/aggrid1' Component={AgGrid01} />
        //         <Route path='/aggrid2' Component={AgGrid02} />
        //         <Route path='/aggrid_c' Component={AgGrid_Configure01} />
        //         <Route path='/aggrid_up' Component={AgGrid_Columns_Up01} />
        //         <Route path='/aggrid_upsort' Component={AgGrid_Columns_Up_Sort01} />
        //         <Route path='/aggrid_event1' Component={AgGrid_Column_Events01} />
        //         <Route path='/aggrid_filter' Component={AgGrid_Column_Filter01} />
        //         <Route path='/aggrid_group1' Component={AgGrid_Column_Groups01} />
        //         <Route path='/aggrid_hearder1' Component={AgGrid_Column_Hearder01} />
        //         <Route path='/aggrid_group2' Component={AgGrid_Row_Group2} />
        //         <Route path='/showbtnpage' Component={ShowBtnPage} />
        //         <Route path='/aggrid_rowh1' Component={AgGrid_Row_Hight1} />
        //         <Route path='/muicheck1' Component={Mui_Check1} />
        //         <Route path='/muidialog1' Component={Mui_SelectDialog01} />
        //     </Routes>

        //     <NavLink to="/muidialog1">
        //          <button>aaaaaaaaaaaaa</button>
        //     </NavLink>  
        // </Router>
    )
}

export default PageGoTo;

