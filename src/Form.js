import React from 'react'
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const Form = () => {
    const [name, setName] = React.useState( '' );
    const [address, setAddress] = React.useState( '' );
    const dispatch = useDispatch();
    const storeUser = ( e ) => {
        e.preventDefault();
        dispatch( { type: 'ADD_USER', payload: { id: uuidv4(), name, address } } );
        setName( '' );
        setAddress( '' );
    }
    return (
        <div>
            <form onSubmit={storeUser}>
                <div className="group">
                    <input type="text" placeholder="Enter name" className="control" value={name} onChange={( e ) => setName( e.target.value )} required />
                    <input type="text" placeholder="Enter Address" className="control" value={address} onChange={( e ) => setAddress( e.target.value )} required />
                    <input type="submit" value="Add User" className="btn btn-default" />
                </div>
            </form>
        </div>
    )
}

export default Form;
