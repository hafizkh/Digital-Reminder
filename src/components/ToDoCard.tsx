import React, { useState } from 'react';
import { TasksInterface } from '../Category/Interface';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Props {
    task: TasksInterface;
    handleDel(taskToBeDeleted: string): void;
    handleUpdate: (taskId: number, newName: string) => void;
}

const ToDoCard = ({ task, handleDel, handleUpdate }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.taskName);

    const toggleEditing = () => setIsEditing(!isEditing);

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTaskName(e.target.value);
    };

    const saveEdit = () => {
        handleUpdate(task.id, editedTaskName);
        setIsEditing(false);
    }
    return (
        <Card sx={{ minWidth: 330, maxWidth: 600, width: '90%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', margin: '10px auto', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px' }}>
                {
                    isEditing ? (
                        <TextField
                            value={editedTaskName}
                            onChange={handleEditChange}
                            fullWidth
                            autoFocus
                            variant="outlined"
                            onBlur={saveEdit}
                        />
                    ) : (
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                {task.taskName}
                            </Typography>
                            <Box>
                                <Button onClick={toggleEditing} sx={{ mr: 1 }}>
                                    <EditIcon />
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => handleDel(task.taskName)}
                                    sx={{ minWidth: '40px' }}
                                >
                                    <DeleteForeverIcon />
                                </Button>
                            </Box>
                        </Box>
                    )
                }

            </CardContent>
        </Card>
    );
};

export default ToDoCard;
