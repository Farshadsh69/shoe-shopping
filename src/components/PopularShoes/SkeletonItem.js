import React from 'react'
import useStyles from './SkeletonItemStyles'
import Skeleton from '@mui/material/Skeleton';


export default function SkeletonItem() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <Skeleton variant='rectangular' width={150} height={150} animation='wave' className={classes.image}/>
            <Skeleton variant="text"  className={classes.title}/>
            <Skeleton variant="text"  className={classes.subtitle}/>
            <Skeleton variant="text"  className={classes.price}/>


        </div>
    )
}
