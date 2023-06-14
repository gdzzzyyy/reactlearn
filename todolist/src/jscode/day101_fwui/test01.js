import React from "react";
import ReactDOM from 'react-dom/client';
import Button from '@material-ui/core/Button';

function Testmaterial01() {
    return (
        <Button variant="contained" color="primary">
            hello world!
        </Button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Testmaterial01 />)