import React from 'react';
import { useSelector } from "react-redux";

const Users = () => {
    const state = useSelector(abc => abc);
    console.log(state);
    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}

export default Users;
