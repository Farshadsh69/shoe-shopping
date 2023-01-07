import { Container, Grid } from "@mui/material";
import React from "react";
import useStyles from "./indexStyles";
import Filter from '../../components/Filter'
import Content from '../../components/Filter/Content/index'
export default function Index() {
    const classes=useStyles()
  return (
    <Container maxWidth="lg">
      <Grid Container className={classes.root}>
        <Grid item lg={3} sm={12}  className={classes.FilterGrid}>
          <Filter />
        </Grid>
        <Grid item lg={9} sm={12} className={classes.ContentGrid}>
            <Content />
        </Grid>
      </Grid>
    </Container>
  );
}
