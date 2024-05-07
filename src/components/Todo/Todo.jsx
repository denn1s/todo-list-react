import { useState } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'

const Todo = () => {
  const [todoList, setTodoList] = useState([])
  const [value, setValue] = useState('')

  const handleClick = () => {
    setTodoList((oldTodoList) => [...oldTodoList, value])
    setValue('')
  }

  return (
    <div>
      <ul>
      {todoList.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
      </ul>
      <Input label="Create new todo" value={value} onChange={setValue} /> 
      <Button text="Add" onClick={handleClick} />
    </div>
  )
}

export default Todo
