import React from 'react'

const UserListItem = ({email, first_name, last_name, avatar}) => {
    return (
      <li className="collection-item avatar">
        <img src={avatar} alt="avatar" className="circle" />
        <span className="title">{first_name}</span>
        <p>
          {last_name} <br />
          {email}
        </p>
      </li>
    );
}

export default UserListItem
