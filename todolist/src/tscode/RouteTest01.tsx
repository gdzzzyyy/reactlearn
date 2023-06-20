import React from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';

function RouteTest01 (){
    return (
        <div>
            <h1>APP</h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                    <Link to="/inbox">Inbox</Link>
                </li>
            </ul>
        </div>
    )
}

const About = React.createContext({
    render() {
        
    }
})