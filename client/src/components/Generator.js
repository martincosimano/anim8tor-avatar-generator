import React from 'react'
import './generator.css'

export default function Generator(props) {
    
  const [avatar, setAvatar] = React.useState({
      avatarName: "",
  })

  const [avatarSrc, setAvatarSrc] = React.useState('');

  const cachedAvatarUrls = React.useRef({});
  const [errorMessage, setErrorMessage] = React.useState('');

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

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch('https://animated-avatar-generator.onrender.com/addAvatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'omit',
        body: JSON.stringify({ avatarName: avatar.avatarName }),
      });
      const data = await res.json();
      if (res.ok) {
        props.onIncrement();
        setErrorMessage(null)
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleIncrement() {
      props.onIncrement();
  }

  return (
    <div className="generator--container">
      <img alt=" " src={avatar.avatarName ? avatarSrc : require("../images/questionmark.png")} className="avatar--image"></img>
      <form onSubmit={handleSubmit}>
        <input
          className="avatarName--input"
          type="text"
          placeholder="Type Something"
          name="avatarName"
          value={avatar.avatarName}
          onChange={event => setAvatar({ ...avatar, avatarName: event.target.value })}
          maxLength={14}
        />
        <div className="form--buttons">
          <button onClick={handleIncrement} className="form-button heart--button"><i className="fa-solid fa-heart"></i></button>
        </div>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  )
}