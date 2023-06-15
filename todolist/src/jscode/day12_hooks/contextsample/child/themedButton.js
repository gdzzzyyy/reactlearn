import React, { useContext } from "react";
import { ThemesContext } from "../context";

function ThemedButton () {
    const value = useContext(ThemesContext);
    return (
        <button style={value}>hello world</button>
    )
}

export default ThemedButton;