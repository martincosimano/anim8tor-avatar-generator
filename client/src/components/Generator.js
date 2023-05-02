import React from 'react'
import './generator.css'

export default function Generator(props) {
    
    const [avatar, setAvatar] = React.useState({
        avatarName: "",
    })

    function generateAvatar(event) {
        const {name, value} = event.target
        setAvatar(prevAvatar => ({
            ...avatar,
            [name]: value
        }))
    }

    return (
        <div className="generator--container">
            <img alt="question mark" src={require("../images/questionmark.png")} className="avatar--image"></img>
                <form>
                    <input className="avatarName--input"
                           type="text"
                           placeholder="Type Something"
                           name="avatarName"
                           value={avatar.avatarName}
                           onChange={generateAvatar}
                    />
                    <div className="form--buttons">
                        <button className="heart--button"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </form>
        </div>
    )
}