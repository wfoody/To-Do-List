import './App.css';
import React from 'react';
import ToDoInput from './Components/ToDoInput'
import Todos from './Components/Todos';


function App() {




  return (
    <div className="App">
      <h1>Todo List</h1>
      <ToDoInput />
      <Todos />
    
    </div>
  );
}


export default App;
