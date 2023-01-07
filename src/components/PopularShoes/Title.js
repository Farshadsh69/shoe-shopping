import { Button, Typography } from '@mui/material'
import React from 'react'
import useStyles from './PopularStyles'
export default function Title({title,button}) {
    const classes=useStyles()
    return (
        <div className={classes.divTitle}>
        <Typography variant='h5' className={classes.textTitle}>{title}</Typography>
        <Button variant='outlined' color='info'>{button}</Button>
        </div>
    )
}
