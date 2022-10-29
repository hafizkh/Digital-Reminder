import React, { FC, useState, ChangeEvent } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../styles/_todo.scss'
import { TasksInterface } from '../Category/Interface'


const ToDo: FC = () => {
  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<TasksInterface[]>([])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setTask(e.target.value)
  }

  const addTask = (): void => {
    const taskNew = { taskName: task }
    setTodoList([...todoList, taskNew])
    console.log(todoList);
  }
  return (
    <Stack className='toDoTask' direction="row" spacing={1}>
      <TextField
        hiddenLabel
        name='yourTask'
        label="Your New Task"
        id="outlined-size-small"
        size="small"
        onChange={handleChange}
      />
      <Button variant='outlined' onClick={addTask}>Add Task</Button>

    </Stack>
  )
}


export default ToDo