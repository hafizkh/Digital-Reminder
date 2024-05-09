import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../styles/_todo.scss';
import { TasksInterface } from '../Category/Interface';
import ToDoCard from './ToDoCard';
import todo from '../assets/images.jpg';

const ToDo: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TasksInterface[]>(() => {
    // Retrieve tasks from local storage and parse them or default to an empty array
    const savedTasks = localStorage.getItem("todoList");
    return savedTasks ? JSON.parse(savedTasks) as TasksInterface[] : [];
  })

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = (): void => {
    const taskNew = { id: Date.now(), taskName: task };
    setTodoList([...todoList, taskNew]);
    setTask("");
  };

  const handleDel = (taskToBeDeleted: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskToBeDeleted));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!task) return;
    addTask();
  };
  const handleUpdate = (taskId: number, newName: string): void => {
    setTodoList(todoList.map(task => {
      if (task.id === taskId) {
        return { ...task, taskName: newName };
      }
      return task;
    }));
  };
  return (
    <div className="todo-app">
      <img src={todo} alt="To do" className="todo-image" />
      <form onSubmit={handleSubmit} className="todo-form">
        <Stack
          direction="row"
          spacing={1}
          alignItems="center" // Ensures vertical alignment of all items
          sx={{
            width: '100%', // Ensures stack takes full width
            mt: 2, // Adds margin top for spacing if needed
          }}
        >
          <TextField
            fullWidth
            hiddenLabel
            name="yourTask"
            label="Your New Task"
            size="small"
            variant="outlined"
            value={task}
            onChange={handleChange}
            sx={{
              '& .MuiInputBase-input': {
                height: '20px', // Controls the text input height, adjust as needed
                padding: '10px 14px', // Ensures padding matches button for alignment
              },
              '& .MuiOutlinedInput-root': {
                height: '48px', // Explicit height matching button
              }
            }}
          />
          <Button
            variant="outlined"
            onClick={handleSubmit}
            sx={{
              height: '48px', // Explicitly setting height to match TextField
              padding: '10px 12px', // Ensures text is centered by adjusting padding
              textTransform: 'none', // Keeps text case consistent
              fontSize: '0.875rem', // Ensures font size is suitable
              whiteSpace: 'nowrap', // Keeps button text on one line
              minWidth: '90px', // Ensures minimum width for aesthetics
            }}
          >
            ADD TASK
          </Button>
        </Stack>



      </form>
      {todoList.length > 0 ? (
        <Stack className="listToDo" direction="column" spacing={2}>
          <h2>List of Todos</h2>
          {todoList.map((task: TasksInterface, key: number) => (
            <ToDoCard key={key} task={task} handleDel={handleDel} handleUpdate={handleUpdate} />
          ))}
        </Stack>
      ) : (
        <h3 className="no-tasks">No Items are added yet in the List</h3>
      )}
    </div>
  );

};

export default ToDo;
