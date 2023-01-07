import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./TitleStyles";
import filerIcon from '../../assets/images/filter.png' 
export default function Title() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <img src={filerIcon} alt='' className={classes.FilterImage}/>
      <Typography variant='h6'>فیلتر</Typography>
    </div>
  );
}
