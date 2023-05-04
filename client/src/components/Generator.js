import React from 'react'
import './generator.css'

export default function Generator(props) {
    
    const [avatar, setAvatar] = React.useState({
        avatarName: "",
    })

    const [avatarSrc, setAvatarSrc] = React.useState('');

    const cachedAvatarUrls = React.useRef({});
    
    React.useEffect(() => {
      if (avatar.avatarName) {
        if (cachedAvatarUrls.current[avatar.avatarName]) {
          setAvatarSrc(cachedAvatarUrls.current[avatar.avatarName]);
        } else {
          fetch(`https://api.multiavatar.com/${avatar.avatarName}.png?apikey=dr6RpJefscNoOa`)
            .then(res => res.url)
            .then(url => {
              cachedAvatarUrls.current[avatar.avatarName] = url;
              setAvatarSrc(url);
            })
            .catch(error => console.error(error));
        }
      }
    }, [avatar.avatarName]);

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