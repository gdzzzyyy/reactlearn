import React, { useState, useMemo} from "react";
import ReactDOM from 'react-dom/client';
import Button from '@material-ui/core/Button';


const TimesFunc = () => {
    const [count, setCount] = useState(100);
    const arr: any[] = [];

    // for(let i = 0; i < count; i++) {
    //     if(i % 2 === 0) {
    //         arr.push();
    //     }
    // }

    useMemo(function() {
        arr.push(count);
        return arr;
    }, [count])

    return (
        <>
            <label htmlFor="num" >
                Your number:
            </label>
{/* 
            <input type="number"
            value={count}
            onChange={
                
            } */}
            <p>{arr}</p>
            <Button onClick={() => {
                setCount(count + 1)
            }}>aaaaaaaaaaaaaaaaaaaaa</Button>
        </>
    )
}

export default TimesFunc;