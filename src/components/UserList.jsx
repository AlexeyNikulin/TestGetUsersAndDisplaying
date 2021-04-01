import React from 'react'
import UserListItem from './UserListItem';

const UserList = ({data}) => {
    return (
        <ul className="collection">
            {
                data.map(user => {
                    return <UserListItem key={user.id} {...user} />;
                })
            }
        </ul>
    );
}

export default UserList
