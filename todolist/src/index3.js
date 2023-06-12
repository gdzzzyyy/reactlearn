/**
 * クラスコンポーネント
 * React的分类式编程
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
//import TodoList from './TodoList';
import TodoList from './day07/TodoList';


//import App from './App';
import reportWebVitals from './reportWebVitals';
//import App from './App';

//JSX 文法
//この方もできます
//ReactDOM.render(<App/>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <TodoList />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
