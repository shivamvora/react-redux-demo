import React,{ useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText] = useState();
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
          <h1>Hello React shivam's todo list</h1>

              <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
              <TodoList />
      </div>
  );
}

export default App;
