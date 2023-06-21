import React, {useState, useEffect, useRef} from 'react';
import Button from "@material-ui/core/Button";

const Child = React.memo(() => {
    console.log("render Child");
    return <p>Child</p>;
});

const TsUseHooks01 = () => {
    console.log("Tsusehooks01");

    const [timeLeft, setTimeLeft] = useState(100);
    const timerRef : any = useRef(null);
    const timeLeftRef : any = useRef(timeLeft);

    useEffect(() => {
        timeLeftRef.current = timeLeft;
    }, [timeLeft]);

    const tick = () => {
        if(timeLeftRef.current === 0) {
            clearInterval(timerRef.current);
            return;
        }
        setTimeLeft(prevTime => prevTime - 1);
    };

    const start = () => {
        timerRef.current = setInterval(tick, 10);
    };

    const reset = () => {
        clearInterval(timerRef.current);
        setTimeLeft(100);
    };

    return (
        <>
            <Button onClick={start}>start</Button>
            <Button onClick={reset}>reset</Button>
            <p>APP : {timeLeft}</p>
            <Child />
        </>
    )
}

export default TsUseHooks01;