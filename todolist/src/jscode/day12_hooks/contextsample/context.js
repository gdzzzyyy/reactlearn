import React from 'react';

export const themes = {
    light : {
        color : "red",
        backgroud : '#ffcc33', 
    },

    dark : {
        color : "blue",
        backgroud : '#222222', 
    },
}

export const ThemesContext = React.createContext(themes);