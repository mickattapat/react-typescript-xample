import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Item from './model/item';

function App() {
  const [ items , setItems ] = useState<Item[]>([])
  const generateId = ():number => {
    return Math.floor(Math.random()*100)
  }
  const addItem = (name:string) => {
    // setItems([...items,{id:1,name:name}])
    setItems([...items,{id:generateId(),name}])
    console.log('add item - >' , name);
  }
  // const items = [
  //   { id:1, name:'programing'},
  //   { id:2, name:'fixbug'},
  //   { id:3, name:'testing'},
  // ]
  return (
    <div className="App">
      <TaskList items={items}/>
      <TaskForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
