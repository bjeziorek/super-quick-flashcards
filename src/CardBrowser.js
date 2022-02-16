import React from 'react'
import data from './data.json'

export default function CardBrowser() {

    const list = data.data.map((el, i) => (
        <p key={i}>{el.lang1} - {el.lang2}</p>)
    );

    return (
        <div>CardBrowser
            {list}
        </div>
    )
}
