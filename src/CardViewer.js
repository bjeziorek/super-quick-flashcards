import React, { useState, useContext } from 'react'
import data from './data.json'
import Card from './Card.js'
import { ThemeContext } from './ThemeContext';

export default function CardViewer(props) {
    const context = useContext(ThemeContext);
    const [index, setIndex] = useState(0);
    const incrementIndex = () => {
        setIndex((prev) => (prev + 1) % data.data.length);
    }
    const decrementIndex = () => {
        setIndex((prev) => prev === 0 ? (data.data.length - 1) : (prev - 1));
    }

    return (
        <div>
            <p className={context.currentTheme}>CardViewer</p>
            <Card mode='A' data={data.data[index]} />
            <Card mode='B' data={data.data[index]} />
            <button  onClick={decrementIndex}>{"<-"}</button>
            <button onClick={incrementIndex}>{"->"}</button>
        </div>
    )
}
