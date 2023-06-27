import {Button} from '@material-ui/core';
import React, { useCallback, useMemo, useRef, useState, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../tscode/Ag-Grid/styles.css';
import {
  ColDef,
  ColGroupDef,
  Grid,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import { IOlympicData } from '../tscode/Ag-Grid/Data';

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);




const TbGridChild = () => {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<IOlympicData[]>();
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      headerName: 'Athlete Details',
      children: [
        {
          field: 'athlete',
          width: 150,
          suppressSizeToFit: true,
          enableRowGroup: true,
          rowGroupIndex: 0,
        },
        {
          field: 'age',
          width: 90,
          minWidth: 75,
          maxWidth: 100,
          enableRowGroup: true,
        },
        {
          field: 'country',
          width: 120,
          enableRowGroup: true,
        },
        {
          field: 'year',
          width: 90,
          enableRowGroup: true,
          pivotIndex: 0,
        },
        { field: 'sport', width: 110, enableRowGroup: true },
        {
          field: 'gold',
          width: 60,
          enableValue: true,
          suppressMenu: true,
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
        },
        {
          field: 'silver',
          width: 60,
          enableValue: true,
          suppressMenu: true,
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
        },
        {
          field: 'bronze',
          width: 60,
          enableValue: true,
          suppressMenu: true,
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
        },
        {
          field: 'total',
          width: 60,
          enableValue: true,
          suppressMenu: true,
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
        },
      ],
    },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      sortable: true,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data: IOlympicData[]) => setRowData(data));
  }, []);
  
    return (
        <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact<IOlympicData>
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                groupHeaderHeight={75}
                headerHeight={150}
                floatingFiltersHeight={50}
                pivotGroupHeaderHeight={50}
                pivotHeaderHeight={100}
                onGridReady={onGridReady}
            ></AgGridReact>
            </div>
        </div>
    )
} 


const BtnInfo:React.FC = () => {
    return <Fragment>
        <TbGridChild />
    </Fragment>
}

const ShowBtnPage:React.FC = () => {
    const [showGrid, setShowGridInfo] = useState(false);

    const handleBtnClick = () => {
        console.log(showGrid);
        // showGrid ? setShowGridInfo(false) : setShowGridInfo(false);
        setShowGridInfo(!showGrid);
    }


    return (
        <Fragment>
            <h1>Button Page</h1>
            <Button onClick={handleBtnClick} variant="contained" color="primary">BTN1</Button>
            
            {showGrid && <BtnInfo />}
        </Fragment>
    );
}


export default ShowBtnPage;