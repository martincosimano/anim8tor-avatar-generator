import React from 'react';
import './list.css';

export default function List(props) {
  const [avatar, setAvatar] = React.useState([]);

  React.useEffect(() => {
    async function getAvatar() {
      const res = await fetch(`/getAllAvatars`);
      const data = await res.json();
      setAvatar(data);
    }
    getAvatar();
  }, [props.count]);

  console.log(props.count)

  const avatarElement = avatar.map((avatar) => (
    <p className="avatar--p" key={avatar._id}>
      <span>{avatar.avatarName}</span>
      <span>{avatar.likes}</span>
      <span><button><i className="fa-regular fa-thumbs-up"></i></button></span>
      <span><button><i className="fa-solid fa-trash"></i></button></span>
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