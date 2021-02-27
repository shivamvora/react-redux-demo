import React from 'react';
import {Provider} from "react-redux";
import Form from './Form';
import store from "./store/";
import Users from "./Users";
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Form/>
      <Users/>
      </div>
      
    </Provider>
    
  )
}

export default App;
