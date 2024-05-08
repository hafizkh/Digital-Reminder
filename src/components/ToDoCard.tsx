import React from 'react';
import { TasksInterface } from '../Category/Interface';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Props {
    task: TasksInterface;
    handleDel(taskToBeDeleted: string): void;
}

const ToDoCard = ({ task, handleDel }: Props) => {
    return (
        <Card sx={{ minWidth: 330, maxWidth: 600, width: '90%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', margin: '10px auto', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px' }}>
                <Typography variant="h6" sx={{ flexGrow: 1, marginRight: 'auto' }}>
                    {task.taskName}
                </Typography>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDel(task.taskName)}
                    sx={{ minWidth: '40px' }} // Ensures the button has a fixed size
                >
                    <DeleteForeverIcon />
                </Button>
            </CardContent>
        </Card>
    );
};

export default ToDoCard;
