import React from 'react';
import { useSelector } from "react-redux";

const Users = () => {
    const { users } = useSelector( abc => abc );

    return (
        <div>
            {users ? users.map( user => (
                <div className="row" key={user.id} >
                    <div className="name">{user.name}</div>
                    <div className="address">{user.address}</div>
                    <div className="user-btn">
                        <button className="btn btn-danger">Delete</button>
                    </div>

                </div>
            ) ) : ''
            }
        </div >
    )
}

export default Users;
