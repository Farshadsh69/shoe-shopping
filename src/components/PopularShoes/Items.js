import { Typography } from '@mui/material'
import React from 'react'
import useStyles from './PopularStyles'

export default function Items({image,title,subtitle,price}) {
    const classes=useStyles()
    return (
        <div className={classes.ItemRoot}>
            <img src={image} alt='' className={classes.imageItem}/>
            <Typography  variant='h5'>{title}</Typography>
            <Typography variant='caption' className={classes.captionItem}>{subtitle}</Typography>
            <Typography color='gold' variant='subtitle2'>{price} تومان</Typography>
            <div  className={classes.divScore}>
            <Typography variant='body2'>4.8</Typography>
            </div>
        </div>
    )
}
