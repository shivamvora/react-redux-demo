import React from 'react';

const Form = ({setInputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
            e.preventDefault();
            setTodos
    }

	return (
		<div>
			<form>
				<input onChange={inputTextHandler} type="text" />
                <span>+</span>
				<button onClick={submitTodoHandler} type="submit">Submit</button>
				<div className="select">
					<select name="todos" className="filter-todo">
						<option value="all">All</option>
						<option value="completed">Completed</option>
						<option value="uncompleted">Uncompleted</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Form;
