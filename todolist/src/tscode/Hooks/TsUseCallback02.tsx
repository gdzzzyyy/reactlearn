import React, { useState, useCallback} from "react";
import ReactDOM from 'react-dom/client';

import Button from "@material-ui/core/Button";

interface ChildProp {
    handleClick: () => void;
}

const Child : React.FC<ChildProp> = React.memo(({handleClick}) => {
    console.log("render child");
    return <button onClick={handleClick}>
        child
    </button>
})

const TsUseCallback02 : React.FC = () => {
    console.log(" TsUseCallback02 ");

    const [count, setCount] = useState(0);
    
    const handleClick = useCallback(() => {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
    }, []);

    return (
        <>
            <p>
                Counter : {count}
            </p>

            <button onClick={() => setCount(count + 1)}>onclick count</button>

            <Child handleClick={handleClick} />
        </>
    )
}

export default TsUseCallback02;