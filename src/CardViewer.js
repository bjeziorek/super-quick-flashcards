import React from 'react'
import data from './data.json'
import Card from './Card.js'

const datas = JSON.stringify(data);
console.log("data:", data)
console.log("datas:", datas)
const index=0;
//const [index, setIndex] = useState({index=0});
//const changeIndex = ()=>{setIndex({index=index+1})}

/*var currentDataSet=data;

function randomFlashCardIndex(currentSet){
    return Math.floor(Math.random()*currentSet.length);
}

function removeUsedCard(index, set){
    return set.filter((val,i)=>{return i!==index})
}

function setCurrentCard(props){

}*/

function currentCard(){
    return data.data[0];
}

function next(){
    console.log('next')
}

function previous(){
    console.log('prev')
}

export default function CardViewer() {
    return (
        <div>
            <p>CardViewer</p>
            <Card mode='A' data={currentCard}/>
            <Card mode='B' data={currentCard}/>
            <button onClick={next}>{"<-"}</button>
            <button onClick={previous}>{"->"}</button>
        </div>
    )
}
