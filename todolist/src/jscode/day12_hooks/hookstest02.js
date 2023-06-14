import React, {Component, Fragment, useState, useEffect, useContext, useRef} from "react";
import ReactDOM from 'react-dom/client';
import './styles.css'

function HooksTest02() {
    const initialState = Math.floor(Math.random() *10) + 1;
    const [count , setCount] = useState(initialState);
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);

    return (
        <Fragment>
            <button onClick={toggle}>
                    {open ? 'close' : 'open'}
                </button>

            <div className={open ? 'isOpen' : 'isClose'}>
                <p>現在の数字{count}</p>
                <button
                    onClick={() => setCount(preState => preState + 1)}>
                        +1
                </button>
                <button
                    onClick={() => setCount(preState => preState - 1)}>
                     - 1
                </button>
                <button onClick={() => setCount(0)}>0</button>
                <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
            </div>
        </Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HooksTest02 />)