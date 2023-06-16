import React, { useState, useMemo, useEffect} from "react";
import ReactDOM from 'react-dom/client';

function Counter () {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [d, setD] = useState(0);

    const handleClick = (type) => {
        switch(type) {
            case 'a':
                setA(a + 1);
                break;
            case 'b':
                setB(b + 1);
                break;
            case 'd':
                setD(d + 1);
                break;
            default:
                return false;
        }
    }

    const c = useMemo(() => {
        console.log(' usememo test 3');
        return a + b;
    }, [a , b]);

    return (
        <>
            <p>-----------------a:{a}-------------------</p>
            <p>-----------------b:{b}-------------------</p>
            <p>-----------------c:{c}-------------------</p>
            <p>-----------------d:{d}-------------------</p>
            <button onClick={() => handleClick('a')}>+a</button>
            <button onClick={() => handleClick('b')}>+b</button>
            <button onClick={() => handleClick('d')}>+d</button>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)