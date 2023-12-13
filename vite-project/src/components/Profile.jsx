import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user) return <h1>Please login</h1>
    return (
        <div>
            <h2>User Name: {user.username}</h2>
            <h2>Password: {user.password}</h2>
        </div>
    )
}

export default Profile;