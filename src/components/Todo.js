 import React from 'react'

const Todo = ({text,todo,todos,setTodos}) => {

    const deleteHandler = (e) => {
             setTodos(todos.filter((el)=> el.id !== todo.id));       
    };
    // const completeHandler = () => {
    //     setTodos(todos.map((item) => {
    //         if(item.id === todo.id){
    //             return{
    //                 ...item,completed: !item.completed
    //             };
                
    //         }
    //         return item;
            
    //     }

    //     ))
    // }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item,completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div>
            <div className="todo">
                <li className="todo-item">
                   {text}                 
                <button onClick={completeHandler} className="complete-btn">Update</button>
                <button onClick={deleteHandler} className="trash-btn">Delete</button>
                
                </li>
            </div>
        </div>
    )
}

export default Todo;
