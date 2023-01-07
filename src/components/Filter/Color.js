import { Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Button } from "@mui/material";
import useStyles from "./ColorStyles";
import ColorItem from "./ColorItem";
export default function Color() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const color = [
    { id: 1, color: "#42a5f5" },
    { id: 2, color: "#e91e63" },
    { id: 3, color: "#4e342e" },
    { id: 4, color: "#e1bee7" },
    { id: 5, color: "#f4511e" },
    { id: 6, color: "#4db6ac" },
    { id: 7, color: "#cddc39" },
    { id: 8, color: "#aa00ff" },
    { id: 9, color: "#37474f" },
    { id: 10, color: "#311b92" },
    { id: 11, color: "#76ff03" },
    { id: 12, color: "#ff6f00" },
    { id: 13, color: "#ffea00" },
  ];

  return (
    <div className={classes.root}>
      <Collapse in={open} collapsedSize={50}>
        <div className={classes.divTitle} onClick={() => setOpen(!open)}>
          <Typography variant="body2"> رنگ ها</Typography>
          <ExpandMoreIcon />
        </div>
        <div className={classes.divColor}>
          {color.map((item) => (
            <ColorItem key={item.id} backgroundColor={item.color} />
          ))}
     
        </div>
        <div className={classes.divButton}>
            <Button variant="outlined"  color="info" size='small'>
              اعمال فیلتر
            </Button>
            <Button variant='text' size='small' color='info'>انتخاب همه</Button>
          </div>
      </Collapse>
    </div>
  );
}
