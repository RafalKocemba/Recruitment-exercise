import React from 'react';

const User = ({ id, avatar, first_name, last_name, email }) => (

    <li className={'user'} key={id}>
        <img className={'user__avatar'} src={avatar} alt="logo" />
        <React.Component>
            <h1 className={'user__name'}>{`${first_name} ${last_name}`}</h1>
            <p className={'user__mail'}>{email}</p>
        </React.Component>
    </li>
);

export default User;