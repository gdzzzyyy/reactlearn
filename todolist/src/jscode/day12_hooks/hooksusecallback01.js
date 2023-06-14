import React, {Component, useCallback, useState} from "react";
import ReactDOM from 'react-dom/client';

const Title = React.memo(() => {
    return (
        <h2>useCallbackTest vo.1</h2>
    )
})

const Button = React.memo(({handleClick, value}) => {
    return <button type="button" onClick={handleClick}>{value}</button>
})

const Count = React.memo(({text, countState}) => {
    return <p>{text}:{countState}</p>
})

const Counter = () => {
    const [firstCounterState, setFirstCountState] = useState(0);
    const [secondCounterState, setSecondCountState] = useState(10);

    const incrementFirstCounter = useCallback(() => setFirstCountState(firstCounterState + 1), [firstCounterState]);
    const incrementSecondCounter = useCallback(() => setSecondCountState(secondCounterState + 10), [secondCounterState]);

    return(
        <>
            <Title></Title>
            <Count text="+ 1 ボダン" countState={firstCounterState}/>
            <Count text="+10 ボダン" countState={secondCounterState} />
            <Button handleClick={incrementFirstCounter} value={'+1 ボダン'} />
            <Button handleClick={incrementSecondCounter} value={'+10 ボダン'} />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)


/**
 * 这里还牵扯到了React.memo   不是很明白！！！
 * useCallback(callbackFunction, [deps]);
 */