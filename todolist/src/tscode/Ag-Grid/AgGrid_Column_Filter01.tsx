'use strict';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './styles.css';
import {
  ColDef,
  ColGroupDef,
  Grid,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import CustomHeader from './comments/customHeader01';
import { IOlympicData } from './Data';


const AgGrid_Column_Filter01 = () => {
  const gridRef = useRef<AgGridReact<IOlympicData>>(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<IOlympicData[]>();
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
        headerComponent: CustomHeader,
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data: IOlympicData[]) => setRowData(data));
  }, []);

  const onBtUpperNames = useCallback(() => {
    const columnDefs: ColDef[] = [
      { field: 'athlete' },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    columnDefs.forEach(function (c) {
      c.headerName = c.field!.toUpperCase();
    });
    gridRef.current!.api.setColumnDefs(columnDefs);
  }, []);

  const onBtLowerNames = useCallback(() => {
    const columnDefs: ColDef[] = [
      { field: 'athlete' },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    columnDefs.forEach(function (c) {
      c.headerName = c.field;
    });
    gridRef.current!.api.setColumnDefs(columnDefs);
  }, []);

  const onBtFilterOn = useCallback(() => {
    const columnDefs: ColDef[] = [
      { field: 'athlete' },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    columnDefs.forEach(function (c) {
      c.filter = true;
    });
    gridRef.current!.api.setColumnDefs(columnDefs);
  }, []);

  const onBtFilterOff = useCallback(() => {
    const columnDefs: ColDef[] = [
      { field: 'athlete' },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    columnDefs.forEach(function (c) {
      c.filter = false;
    });
    gridRef.current!.api.setColumnDefs(columnDefs);
  }, []);

  const onBtResizeOn = useCallback(() => {
    const columnDefs: ColDef[] = [
      { field: 'athlete' },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    columnDefs.forEach(function (c) {
      c.resizable = true;
    });
    gridRef.current!.api.setColumnDefs(columnDefs);
  }, []);

  const onBtResizeOff = useCallback(() => {
    const columnDefs: ColDef[] = [
      { field: 'athlete' },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    columnDefs.forEach(function (c) {
      c.resizable = false;
    });
    gridRef.current!.api.setColumnDefs(columnDefs);
  }, []);

  return (
    <div style={containerStyle}>
      <div className="test-container">
        <div className="test-header">
          <button onClick={onBtUpperNames}>Upper Header Names</button>
          <button onClick={onBtLowerNames}>Lower Lower Names</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={onBtFilterOn}>Filter On</button>
          <button onClick={onBtFilterOff}>Filter Off</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={onBtResizeOn}>Resize On</button>
          <button onClick={onBtResizeOff}>Resize Off</button>
        </div>

        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact<IOlympicData>
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default AgGrid_Column_Filter01;