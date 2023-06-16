import React from 'react'
import ReactDOM from 'react-dom/client';

import {AppBar, Button, ButtonGroup, IconButton, Toolbar, Typography} from '@material-ui/core'

const MaterialUIT = () => {
    return (
        <>
            <ButtonGroup size='small' color='primary' aria-label='outlined primary button group'>
                <Button>AAA</Button>
                <Button>BBB</Button>
                <Button>CCC</Button>
            </ButtonGroup>

            <ButtonGroup size='large' color='dark' aria-label='outlined primary button group'>
                <Button>QQQ</Button>
                <Button>WWW</Button>
                <Button>EEE</Button>
            </ButtonGroup>

            <ButtonGroup color='primary' aria-label='outlined primary button group'>
                <Button>444</Button>
                <Button>333</Button>
                <Button>111</Button>
            </ButtonGroup>  
        </>
   

    )
} 
    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MaterialUIT />)