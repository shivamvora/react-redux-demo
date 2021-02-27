import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <div className="group">
                    <input type="text" placeholder="Enter name" className="control"/>
                    <input type="text" placeholder="Enter Address" className="control"/>
                    <input type="submit" value="Add User" className="btn btn-default"/>
                </div>
            </form>
        </div>
    )   
}

export default Form;
