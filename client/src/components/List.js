import React from 'react'
import "./list.css"

export default function List() {

    const [avatar, setAvatar] = React.useState([])

    console.log(avatar)

    React.useEffect(() => {
        async function getAvatar() {
            const res = await fetch(`/avatars`)
            const data = await res.json()
            setAvatar(data)
          }
          getAvatar()
        }, [avatar])

        const avatarElement = avatar.map((avatar) => (
            <p className="avatar--p" key={avatar._id}>
              <div className="avatar-info">
                <span>{avatar.avatarName}</span>
                <span> {avatar.likes}</span>
              </div>
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
    )
}