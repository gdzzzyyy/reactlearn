/**
 * 関数コンポーネント
 * React的函数式编程
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

//JSX 文法
//この方もできます
//ReactDOM.render(<App/>, document.getElementById('root'));
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
      <div>
          <h1>hello wolrd</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  );
  
  root.render(
    element
  );

}

setInterval(tick, 1000);