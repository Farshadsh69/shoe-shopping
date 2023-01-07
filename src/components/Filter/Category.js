import { Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Collapse from '@mui/material/Collapse';

import Checkbox from "@mui/material/Checkbox";
import useStyles from "./CategoryStyles";
export default function Category() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
        <Collapse in={open} collapsedSize={50}>
        <div className={classes.divTitle} onClick={() => setOpen(!open)}>
          <Typography variant="body2">دسته بندی ها</Typography>
          <ExpandMoreIcon />
        </div>
        <div>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="مردانه" />
            <FormControlLabel control={<Checkbox />} label="زنانه" />
            <FormControlLabel control={<Checkbox />} label="بچگانه" />
            <FormControlLabel control={<Checkbox />} label="ایمنی" />
          </FormGroup>
        </div>
        </Collapse>
    </div>
  );
}
