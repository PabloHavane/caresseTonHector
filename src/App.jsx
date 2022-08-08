// Created by Pablo Havane on 07/19/2022

import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./App.css"

function Gif() {
    return <div className="img-container">
        <img src="gif_caresse_ton_hector.gif" alt="GIF caresse ton Hector"></img>
    </div>
        
}

function Music() {
    return <ReactPlayer 
        url="https://www.youtube.com/watch?v=7RUqluZyqYw"
        width="0px"
        height="0px"
        playing={true}
        controls={false}
    />
}

// La logique pour les boutons est la même qui se répète : possibilté d'amélioration ? 
function Button() {
    const [show, setShow] = useState(false)
    const [music, setMusic] = useState(false)
    let textButton = "Appuyer ici pour caresser le Hector"
    let speakerImage = <img src="speaker.png" alt="icone de speaker"></img>

    if (show === true) {
        textButton = "Appuyer ici pour arrêter de le caresser"
    }

    if (music === false) {
        speakerImage = <img src="no-speaker.png" alt="icone de no speaker" />
    }

    return <div>
        <div className="button-container">
            <button id="main-button" onClick={() => setShow(!show)} >{textButton}</button>
            <button onClick={() => setMusic(!music)}> {speakerImage} </button>
        </div>

        {show ? <Gif /> : null}
        {music ? <Music /> : null}
    </div>
}

function App() {
    return <div className="App">
        <Button />
    </div>
}

export default App;
