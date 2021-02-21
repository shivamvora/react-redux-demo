import React from 'react'

const Todo = ({text}) => {
    return (
        <div>
            <div className="todo">
                <li className="todo-item">
                   {text}                 
                <button className="complete-btn">Update</button>
                <button className="trash-btn">Delete</button>
                
                </li>
            </div>
        </div>
    )
}

export default Todo;
