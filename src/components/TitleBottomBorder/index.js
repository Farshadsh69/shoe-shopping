import { Typography } from "@mui/material";
import React from "react";
import useStyles from "../TitleBottomBorder/indexStyles";

export default function Index({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.Typography}>{title}</Typography>
    </div>
  );
}
