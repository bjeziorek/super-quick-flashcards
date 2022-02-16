import { useState } from 'react';
import './App.css';
import CardBrowser from './CardBrowser';
import CardViewer from './CardViewer';


export default function Flashcards() {
    const [content, setContent] = useState(<CardViewer />);
    const runCardViewer = () => {
        setContent(<CardViewer />)
    }
    const runCardBrowser = () => {
        setContent(<CardBrowser />)
    }

    return (
        <div>
            <button onClick={runCardViewer}>Card Viewer</button>
            <button onClick={runCardBrowser}>Card Browser</button>
            {content}
        </div>
    )
}
