import React from 'react'

export default function Card(props) {

    let output = '';

    switch (props.mode) {
        case "A": output = props.data.lang1; break;
        case "B": output = props.data.lang2; break;
        default: output = "something went wrong O_o...: mode is: " + props.mode; break;
    }

    return (
        <div>{output}</div>
    )
}
