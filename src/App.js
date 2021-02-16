import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [counter,setCounter] = useState(0);

    
  return (
    <div className="App">
          
          <h1 onClick={()=>setCounter(counter + 1)}> 
            
            Counter : {counter}
            
            </h1>
          
      </div>
  );
}

export default App;
