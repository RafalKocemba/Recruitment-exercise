import React from 'react';

import User from './User';

const UserList = ({ users, inputValue }) => {

    const filterUsers = users
        .filter(user => {
            const fullName = `${user.first_name} ${user.last_name}`;

            if ((fullName.toLowerCase().includes(inputValue))) {
                return user
            } else {
                return null
            }
        }).sort((a, b) => {
            const nameA = a.last_name.toLowerCase(), nameB = b.last_name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0
        }).map(user => <User {...user} />);

    return (
        <ul className={'users'}>
            {filterUsers}
        </ul>
    )
};

export default UserList;