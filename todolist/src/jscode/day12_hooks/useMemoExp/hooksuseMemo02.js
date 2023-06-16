import React, { useState, useMemo, useEffect} from "react";
import ReactDOM from 'react-dom/client';

function Counter () {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [d, setC] = useState(0);

    const handleClick = (type) => {
        switch(type) {
            case 'a':
                setA(a + 1);
                break;
            case 'b':
                setB(b + 1);
                break;
            // case 'c':
            //     setC(c + 1);
            //     break;
            default:
                return false;
        }
    }
    //我觉得这里可以用useeffect可以监听ab变化  产生新的C值  但好像不行
    //
    // useEffect(() =>{
    //     <p>-----------------c:{a + b}-------------------</p>
    // }, [a, b])

    const c = useMemo(() => {
        return a + b;
    }, [a , b]);

    return (
        <>
            <p>-----------------a:{a}-------------------</p>
            <p>-----------------b:{b}-------------------</p>
            <p>-----------------c:{c}-------------------</p>
            <button onClick={() => handleClick('a')}>+a</button>
            <button onClick={() => handleClick('b')}>+b</button>
          
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)