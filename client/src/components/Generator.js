import React from 'react'
import './generator.css'

export default function Generator(props) {
    return (
        <div className="generator--container">
            <img alt="question mark" src={require("../images/questionmark.png")} className="avatar--image"></img>
        </div>
    )
}