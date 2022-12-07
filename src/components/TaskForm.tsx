import React, { useRef } from "react"

interface TaskFromProp {
    onAddItem:(name:string)=> void
}
const TaskForm = ({onAddItem}:TaskFromProp): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)

  function saveData(e: React.FormEvent) {
    e.preventDefault()
    const name = inputRef.current!.value
    onAddItem(name)
    inputRef.current!.value = ''
  }

  return (
    <form onSubmit={saveData}>
      <input type="text" placeholder="work" ref={inputRef} />
      <button type="submit">save</button>
    </form>
  )
}

export default TaskForm
