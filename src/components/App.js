import React, { useEffect, useState } from 'react';

import UserList from '../components/UserList';

import './App.css'

const App = () => {

    const [userData, setUserData] = useState('');
    const [inputValue, setInputValue] = useState('');

    const dataFetch = () => {
        const API = 'http://xxx-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data => {
                setUserData(data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        dataFetch()
    }, []);

    const changeInputHandler = ({ target }) => setInputValue(target.value);


    return (
        <>
            <input className={'search-input'} type="text" onChange={changeInputHandler} value={inputValue} />
            {userData && <UserList users={userData} inputValue={inputValue} />}
        </>
    );
};

export default App;