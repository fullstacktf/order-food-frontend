import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Button } from '../../../components/Button/Button'

export interface dialogData {
  data: {
    name: string
    buttonText: string
    title: string
    text: string
    input: {
      label: string
      type: string
    }
    register: any
  }
  handleClose: () => void
  handleSubmit: () => void
  open: boolean
}

export const FormDialog: FC<dialogData> = ({
  open,
  data,
  handleClose,
  handleSubmit,
}) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>{data.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{data.text}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={data.input.label}
            type={data.input.type}
            fullWidth
            {...data.register(data.name)}
          />
        </DialogContent>
        <DialogActions>
          <Button text="Cancel" onClickHandler={handleClose}></Button>
          <Button text="Submit" onClickHandler={handleSubmit}></Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
