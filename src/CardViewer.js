import React, { useState } from 'react'
import data from './data.json'
import Card from './Card.js'

const datas = JSON.stringify(data);
console.log("data:", data);
console.log("datas:", datas);

export default function CardViewer(props) {
    const [index, setIndex] = useState(0);
    const incrementIndex = () => {

        setIndex((prev) => (prev + 1) % data.data.length); console.log(index)
    }
    const decrementIndex = () => {
        setIndex((prev) => prev === 0 ? (data.data.length - 1) : (prev - 1)); console.log(index)
    }

    return (
        <div>
            <p>CardViewer</p>
            <Card mode='A' data={data.data[index]} />
            <Card mode='B' data={data.data[index]} />
            <button onClick={decrementIndex}>{"<-"}</button>
            <button onClick={incrementIndex}>{"->"}</button>
        </div>
    )
}
