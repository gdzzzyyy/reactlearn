import React from 'react'
import ReactDOM from 'react-dom/client';

import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core'

const MaterialUIT = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color='inherit' aria-label='menu'>
                <MenuIcon />
            </IconButton>

            <Typography variant='h6' className={classes.title}>
                News
            </Typography>

            <Button color='inherit'>Login</Button> */}
            </Toolbar>
        </AppBar>

    )
} 
    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MaterialUIT />)