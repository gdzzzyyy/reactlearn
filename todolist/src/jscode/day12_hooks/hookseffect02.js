import React, {Component, useState, useEffect} from "react";
import ReactDOM from 'react-dom/client';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const EffectClass2 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count + '回クリックされました。';
    })

    return (
        <>
            <p>{count}回クリックされました。</p>
            <ButtonGroup color="primary" aria-label="outline button group">
                {/* <Button onClick={() => setCount((count) => count + 1)}> */}
                <Button onClick={() => setCount((prev) => prev + 1)}>
                    ボダン
                </Button>

                <Button onClick={() => setCount(0)}>
                    リセット
                </Button>
            </ButtonGroup>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EffectClass2 />)