import { Button, ButtonGroup } from "@material-ui/core";
import React, {Component, useReducer} from "react";
import ReactDOM from 'react-dom/client';

const initialState = {
    firstCounter : 0,
    secondCounter : 100,
}

const reducerFunc = (countState, action) => {
    switch(action.type) {
        case 'incr' :
            return {...countState, firstCounter: countState.firstCounter + action.value};
        case 'incr2' :
            return {...countState, secondCounter: countState.secondCounter + action.value};
        case 'dec':
            return  {...countState, firstCounter: countState.firstCounter - action.value};
        case 'dec2':
            return  {...countState, secondCounter: countState.secondCounter - action.value};
        case 'reset' :
            return {...countState, firstCounter: initialState.firstCounter};
        case 'reset2' :
            return {...countState, secondCounter: initialState.secondCounter};
        default:
            return countState;
    }
}

const Counter = () => {
    const [count, displatch] = useReducer(reducerFunc, initialState);
    return (
        <>
            <h2>カウントfirstCounter  :{count.firstCounter}</h2>
            <ButtonGroup color="primary" aria-label="button group">
                <Button onClick={() => displatch({type: 'incr', value: 1})} >increment</Button>
                <Button onClick={() => displatch({type: 'dec', value: 1})} >decrement</Button>
                <Button onClick={() => displatch({type: 'reset'})} >reset</Button>
            </ButtonGroup>

            <h2>カウントsecondCounter  :{count.secondCounter}</h2>
            <ButtonGroup color="primary" aria-label="button group">
                <Button onClick={() => displatch({type: 'incr2', value: 1})} >increment</Button>
                <Button onClick={() => displatch({type: 'dec2', value: 1})} >decrement</Button>
                <Button onClick={() => displatch({type: 'reset2'})} >reset</Button>
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
 * --->  action 可以传很多值 {} 用这个包起来。 
 */