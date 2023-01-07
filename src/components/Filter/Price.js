import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import PriceInput from "./PriceInput";
import useStyles from "./PriceStyles";
export default function Price() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open} collapsedSize={50}>
        <div className={classes.divTitle} onClick={() => setOpen(!open)}>
          <Typography variant="body2">تعیین محدوده قیمت</Typography>
          <ExpandMoreIcon />
        </div>
        <div>
          <PriceInput placeholder='حداقل قیمت'/>
          <PriceInput placeholder='حداکثر قیمت'/>
        </div>
        <Button variant='outlined' fullWidth color='info'>اعمال قیمت</Button>
      </Collapse>
    </div>
  );
}
