import React from 'react'
import './generator.css'

export default function Generator(props) {
    
    const [avatar, setAvatar] = React.useState({
        avatarName: "",
    })

    const [avatarSrc, setAvatarSrc] = React.useState('')

    React.useEffect(() => {
        async function getAvatar() {
            const res = await fetch(`https://api.multiavatar.com/${avatar.avatarName}.png?apikey=dr6RpJefscNoOa`)
            setAvatarSrc(res.url)
          }
          getAvatar()
        }, [avatar])

    function generateAvatar(event) {
        const {name, value} = event.target
        setAvatar(prevAvatar => ({
            ...avatar,
            [name]: value
        }))
    };

    function handleSubmit(event) {
        event.preventDefault();
        fetch('/addAvatar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ avatarName: avatar.avatarName}),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    };


    return (
        <div className="generator--container">
            <img alt=" " src={avatar.avatarName ? avatarSrc : require("../images/questionmark.png")} className="avatar--image"></img>
                <form onSubmit={handleSubmit}>
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