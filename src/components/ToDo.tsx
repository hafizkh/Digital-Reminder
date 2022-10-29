import React, { FC, useState, ChangeEvent } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../styles/_todo.scss'
import { TasksInterface } from '../Category/Interface'
import ToDoCard from './ToDoCard';


const ToDo: FC = () => {
  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<TasksInterface[]>([])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }
  const addTask = (): void => {
    const taskNew = { taskName: task }
    setTodoList([...todoList, taskNew])
    setTask("")
  }
  return (
    <div>
    <Stack className='toDoTask' direction='row' spacing={1}>
      <TextField
        hiddenLabel
        name='yourTask'
        label="Your New Task"
        id="outlined-size-small"
        size="small"
        value={task}
        onChange={handleChange}
      />
      <Button className='btn' variant='outlined' onClick={addTask}>Add Task</Button>
      </Stack>
      <Stack className="listToDo" direction='column'>
        {todoList.map(()=>{
          return <ToDoCard/>
        })}
      </Stack>
  </div>
  )
}



export default ToDo