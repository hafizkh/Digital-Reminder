import React, { FC } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../styles/_todo.scss'


const ToDo: FC = () => {
  return (
      <Stack className='toDoTask' direction="row" spacing={1}>
          <TextField
            hiddenLabel
            label="Your Task"
            id="outlined-size-small"
            size="small"
          />
        <Button variant='outlined'>Add Task</Button>

    </Stack>
  )
}


export default ToDo