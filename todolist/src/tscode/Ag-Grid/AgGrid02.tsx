'use strict';

/**
 * Accessing Row Data Values
 *The colDef.field property is used to access values from the row data object.
 *In most cases the field will be a property name from the row data object. 
 *If, however, the row data contains nested objects, you can use dot notation 
 *to reference deep property values.
 *
 *For example, if the row data has an object property medals that contains 
 *the individual medal counts, then to display gold medals won use the 
 *field value 'medals.gold'.
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, ColGroupDef, Grid, GridOptions } from 'ag-grid-community';
import { getData } from './Data';

const AgGrid02 = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<any[]>(getData());
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: 'name' },
    // Using dot notation to access nested property
    { field: 'medals.gold', headerName: 'Gold' },
    // Show default header name
    { field: 'person.age' },
  ]);

  return (
    <div style={containerStyle}>
      <div style={{ height: '100%', boxSizing: 'border-box' }}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default AgGrid02;