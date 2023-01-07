import { Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./BrandsStyles";
export default function BrandItem({ brand }) {
  const [active, setActive] = useState(false);
  const classes = useStyles();
  return (
    <div style={{boxShadow:active?'0px 0px 10px 2px #e60e0e':''}}
     className={classes.ItemRoot}  onClick={()=>setActive(!active)}>
      <Typography variant="body2">{brand}</Typography>
      {active ? (
        <CloseIcon color='error' fontSize="small" className={classes.iconItemClose} />
      ) : (
        <AddIcon color='info' fontSize="small" className={classes.iconItemAdd} />
      )}
    </div>
  );
}
