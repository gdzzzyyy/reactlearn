import { Button, ButtonGroup } from "@material-ui/core";
import React, {Component, useReducer} from "react";
import ReactDOM from 'react-dom/client';

const initialState = 0

const reducerFunc = (countState, action) => {
    switch(action) {
        case 'incr' :
            return countState + 1;
        case 'dec':
            return countState - 1;
        case 'reset' :
            return initialState;
        default:
            return countState;
    }
}

const Counter = () => {
    const [count, displatch] = useReducer(reducerFunc, initialState);
    return (
        <>
            <h2>カウント:{count}</h2>
            <ButtonGroup color="primary" aria-label="button group">
                <Button onClick={() => displatch('incr')} >increment</Button>
                <Button onClick={() => displatch('dec')} >decrement</Button>
                <Button onClick={() => displatch('reset')} >reset</Button>
            </ButtonGroup>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)

/**
 * const [state, dispatch] = useReducer(reducer, '初期値')
 * state : 更新するための関数
 * dispatch(action) : reducerを実行するための呼び出し関数です
 * 
 */