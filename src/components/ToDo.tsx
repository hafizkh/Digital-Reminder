import React, { FC, useState, ChangeEvent } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../styles/_todo.scss'
import { TasksInterface } from '../Category/Interface'
import ToDoCard from './ToDoCard';
import todo from '../assets/images.jpg'


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
  const handleDel = (taskToBeDeleted: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskToBeDeleted
    }))
  }
  return (
    <div>
        <img src={todo} alt="To do"  />
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
      {
        todoList.length ?
          <Stack className="listToDo" direction='column'>
            <h1>List of Todos</h1>
            {todoList.map((task: TasksInterface, key: number) => {
              return <ToDoCard key={key} task={task} handleDel={handleDel} />
            })}
          </Stack>
          :
          <h3>No Items are added yet in the List</h3>
      }
      </div>
  )
}



export default ToDo