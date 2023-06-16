import React, { useState, useMemo} from "react";
import ReactDOM from 'react-dom/client';



const Counter = () => {

    const [count01, setCount01] = useState(0);
    const [count02, setCount02] = useState(0);

    const result01 = () => setCount01(count01 + 1);
    const result02 = () => setCount02(count02 + 1);
    
    const square = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++;
        return count02 * count02;
    }, [count02])


    return(
        <>
            <div>result01: {count01} </div>
            <div>result02: {count02} </div>
            <div>square: {square}</div>
            <button onClick={result01}>increment</button>
            <button onClick={result02}>increment2</button>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)


/**
 * 这里还牵扯到了React.memo   不是很明白！！！
 * useCallback(callbackFunction, [deps]);
 */