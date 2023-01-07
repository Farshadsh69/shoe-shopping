import { Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import Collapse from '@mui/material/Collapse';

import Radio from '@mui/material/Radio';
import useStyles from "./SizeStyles";
export default function Sort() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
        <Collapse in={open} collapsedSize={50}>
        <div className={classes.divTitle} onClick={() => setOpen(!open)}>
          <Typography variant="body2"> مرتب سازی با</Typography>
          <ExpandMoreIcon />
        </div>
        <div>
          <RadioGroup>
            <FormControlLabel value='مردانه' control={<Radio />} label="مردانه" />
            <FormControlLabel value='زنانه' control={<Radio />} label="زنانه" />
            <FormControlLabel value='بچگانه' control={<Radio />} label="بچگانه" />
            <FormControlLabel value='ایمنی' control={<Radio />} label="ایمنی" />
          </RadioGroup>
        </div>
        </Collapse>
    </div>
  );
}
