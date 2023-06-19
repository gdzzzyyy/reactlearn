import React from "react";
import ReactDOM from 'react-dom/client';

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *' : {
            margin: theme.spacing(1),
        },
    },
}));

const GroupOrientation = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root} >
            <ButtonGroup  
                orientation="vertical"
                color="primary"
                aria-label='outlined primary button group'>
                <Button>QQQ</Button>
                <Button>WWW</Button>
                <Button>EEE</Button>
            </ButtonGroup>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <GroupOrientation />
    </React.StrictMode>
)