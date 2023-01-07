import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import useStyles from "./SizeStyles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Size() {
  const classes = useStyles();
  const Size = [
    { id: 1, size: "24" },
    { id: 2, size: "25" },
    { id: 3, size: "26" },
    { id: 4, size: "27" },
    { id: 5, size: "28" },
    { id: 6, size: "29" },
    { id: 7, size: "30" },
    { id: 8, size: "31" },
    { id: 9, size: "32" },
    { id: 10, size: "33" },
    { id: 11, size: "34" },
    { id: 12, size: "35" },
    { id: 13, size: "36" },
    { id: 14, size: "37" },
    { id: 15, size: "38" },
    { id: 16, size: "39" },
    { id: 17, size: "40" },
    { id: 18, size: "41" },
    { id: 19, size: "42" },
    { id: 20, size: "43" },
    { id: 21, size: "44" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open} collapsedSize={50}>
        <div className={classes.divTitle} onClick={() => setOpen(!open)}>
          <Typography variant="body2">براساس سایز</Typography>
          <ExpandMoreIcon />
        </div>
        <FormGroup>
          <div className={classes.divCheckBox}>
            {Size.map((item) => (
              <FormControlLabel
              className={classes.widthSize}
                key={item.id}
                control={<Checkbox />}
                label={item.size}
              />
            ))}
          </div>
        </FormGroup>
        <div className={classes.divButton}>
          <Button variant="outlined" color="info" size="small">
            اعمال فیلتر
          </Button>
          <Button variant="text" size="small" color="info">
            انتخاب همه
          </Button>
        </div>
      </Collapse>
    </div>
  );
}
