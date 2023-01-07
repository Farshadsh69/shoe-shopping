import React from "react";
import LazyLoad from "react-lazyload";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useStyles from "./indexStyles";
import Slider from "../../components/slider/index";
import  Category from '../../components/category/index'
import PopularShoes from "../../components/PopularShoes/index";

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" >
      <LazyLoad height={ 500}>
      <Grid container className={classes.root}>
        <Grid item lg={8} xs={12} className={classes.sliderGrid}>
          <Slider />
        </Grid>
        <Grid item lg={4} xs={12} className={classes.categoryGrid}>
          <Category />
        </Grid>
      </Grid>
      </LazyLoad>
        <PopularShoes />
    </Container>
  );
}
