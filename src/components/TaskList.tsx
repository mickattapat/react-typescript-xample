import React from "react"
import Item from "../model/item"

interface TaskListProp {
  items: Item[]
}

function TaskList(props: TaskListProp): JSX.Element {
    console.log(props);
    
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {props.items.map((element) => (
          <li key={element.id}>{element.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
