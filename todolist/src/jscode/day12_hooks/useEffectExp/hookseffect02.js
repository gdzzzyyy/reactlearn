import React, {Component, useState, useEffect} from "react";
import ReactDOM from 'react-dom/client';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Input, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const EffectClass2 = () => {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const [name, setName] = useState({
        firstName : '',
        lastName : '',
    });

    useEffect(() => {
        document.title = count + '回クリックされました。';
    }, [count])


    useEffect(() => {
        console.log('初め')　　//状態が始めて変化したどうた、実行！　
        return () => {
            console.log("取り消し")　　//第二回状態が変化して、先　実行
        }
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

            <p>'私の名前は:'</p>
            <form className={classes.root} noValidate autoComplete="off">
                <Input
                    placeholder="姓"
                    value={name.lastName}
                    onChange={(e) => {setName({...name, lastName: e.target.value})}}>
                </Input>

                <Input
                    placeholder="名"
                    value={name.firstName}
                    onChange={(e) => {setName({...name, firstName: e.target.value})}}>
                </Input>

            </form>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EffectClass2 />)