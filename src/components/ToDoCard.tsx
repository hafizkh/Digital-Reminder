import React from 'react'
import { TasksInterface } from '../Category/Interface'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Button from '@mui/material/Button'

interface Props {
    task: TasksInterface
}
const ToDoCard = ({ task }: Props) => {
    return (
        <>
        <div className='todoList'>
            <Card sx={{ minWidth: 330 }}>
                <CardContent className='content'>
                    <Typography variant="h5">
                        {task.taskName}
                    <Button className='deleteBtn' style={{paddingLeft:'12rem'}}><DeleteForeverIcon /></Button>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default ToDoCard
