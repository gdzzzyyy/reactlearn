import React, { useRef } from 'react';
import { IHeaderParams } from 'ag-grid-community';

const CustomHeader01 = (props: IHeaderParams) => {
  const { enableMenu, displayName, showColumnMenu } = props;
  const menuButtonRef = useRef(null);

  console.log('customHeader01 rendered -> ' + displayName);

  return (
    <div style={{ display: 'flex' }}>
      {enableMenu && (
        <div
          ref={menuButtonRef}
          className="ag-icon ag-icon-menu"
          onClick={() => showColumnMenu(menuButtonRef.current!)}
        >
          &nbsp;
        </div>
      )}
      <div className="customHeaderLabel">{displayName}</div>
    </div>
  );
};

export default CustomHeader01;
