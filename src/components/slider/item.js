import React from "react";
import useStyles from "./itemStyles";
import { Button, Typography } from '@mui/material';


export default function Item({ item }) {
    const classes=useStyles()
  return (
      <>
<div className={classes.root}>
<div>
    <img  src={item.image} alt='shoes' className={classes.img}/>
</div>
<div className={classes.titleDiv}>
<Typography variant='h1' className={classes.tyT}>{item.title}</Typography>
<Typography variant='body1'>{item.subtitle}</Typography>
<Typography  color='gold' className={classes.tyP}>{item.price}تومان</Typography>
</div>
<div className={classes.disDiv}>
    <Typography>{item.discount}%تخفیف</Typography>
</div>
<div className={classes.btnDiv}>
    <Button color='info' variant='outlined'>نمایش جزئیات</Button>
</div>
</div>

</>
  )
}
