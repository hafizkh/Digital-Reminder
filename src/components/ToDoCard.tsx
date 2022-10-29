import React from 'react'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { TasksInterface } from '../Category/Interface'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

interface Props {
    task: TasksInterface
}
const ToDoCard = ({ task }: Props) => {
    return (
        <div className='todoList'>
            <Stack direction='row' spacing={8}>
                <h2>{task.taskName}</h2>
                <Button>Delete</Button>
            </Stack>
            <Divider />

        </div>
    )
}

export default ToDoCard
