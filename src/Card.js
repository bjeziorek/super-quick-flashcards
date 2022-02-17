import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

export default function Card(props) {
    const context = useContext(ThemeContext);

    let output = '';

    switch (props.mode) {
        case "A": output = props.data.lang1; break;
        case "B": output = props.data.lang2; break;
        default: output = "something went wrong O_o...: mode is: " + props.mode; break;
    }

    return (
        <div className={context.currentTheme}>{output}</div>
    )
}
