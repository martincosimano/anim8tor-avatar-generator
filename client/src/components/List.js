import React from 'react';
import './list.css';

export default function List(props) {
  const [avatar, setAvatar] = React.useState([]);

  React.useEffect(() => {
    async function getAvatar() {
      const res = await fetch(`https://animated-avatar-generator.onrender.com/getAllAvatars`, {
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await res.json();
      const sortedData = data.sort((a, b) => b.likes - a.likes);
      setAvatar(sortedData);
    }
    getAvatar();
  }, [props.count]);

  const handleLike = async(id) => {
    try {
      const res = await fetch(`/likeAvatar/${id}`, {
        method: "PUT",
        credentials: 'omit',
      });
      const updatedAvatar = await res.json();
      setAvatar((prevAvatar) =>
        prevAvatar.map((avatar) =>
          avatar._id === id ? { ...avatar, likes: updatedAvatar.likes } : avatar
        ).sort((a, b) => b.likes - a.likes)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async(id) => {
    try {
      const res = await fetch(`/deleteAvatar/${id}` , {
        method: "DELETE",
        credentials: 'omit',
      });
      if (res.ok) {
        setAvatar(avatar.filter((avatar) => avatar._id !== id));
      } else {
        console.error(res.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }


  const avatarElement = avatar.map((avatar) => (
    <p className="avatar--p" key={avatar._id}>
      <a href={`https://api.multiavatar.com/${avatar.avatarName}.png?apikey=dr6RpJefscNoOa`}><img className="avatar--icon" src={`https://api.multiavatar.com/${avatar.avatarName}.png?apikey=dr6RpJefscNoOa`} alt="avatar icon" /></a>
      <span className="avatar--name">{avatar.avatarName}</span>
      <span className="avatar--likes">{avatar.likes}</span>
      <span className="avatar--buttons">
        <button onClick={() => handleLike(avatar._id)}>
          <i id="likes" className="fa-regular fa-thumbs-up"></i>
        </button>
        <button onClick={() => handleDelete(avatar._id)}>
          <i id="trash" className="fa-solid fa-trash"></i>
        </button>
      </span>
    </p>
  ));
  
  return (
    <div className="list">
      <h2 className="list--title">Favorite Avatars</h2>
      <div className="container">
        <div className="list--container">
          <ul>
            <li className="list--avatar">
              {avatarElement}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}