import { Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./PriceInputStyles ";
export default function PriceInput({ placeholder }) {
  const getPriceText = (val) => {
    let result = "";
    let j = 0;
    for (let i = val.length; i > 0; i -= 1) {
      if (j === 3) {
        result = `,${result}`;
        j = 0;
      }
      result = val[i - 1] + result;
      j += 1;
    }
    return result;
  };

  const classes = useStyles();
  const [value, setValue] = useState("");
  return (
    <div className={classes.root}>
      <input
      value={value}
      onChange={(e)=>{
          const val=e.target.value
          setValue(getPriceText(val.replace(/,/g ,'')))
      }}
        placeholder={placeholder}
        className={classes.Input}
      />
      <Typography variant="caption">تومان</Typography>
    </div>
  );
}
