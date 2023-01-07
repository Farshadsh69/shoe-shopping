import { Grid } from "@mui/material";
import LazyLoad from "react-lazyload";
import React from "react";
import Childish from "./Childish";
import Mens from "./Mens";
import Safety from "./Safety";
import Women from "./Women";
import Title from "./Title";

export default function Index() {
  return (
    <>
        <LazyLoad height={380}>
          <Grid container style={{ height: 380 }}>
            <Title button="مشاهده همه" title="پرفروش های مردانه" />

            <Mens />
          </Grid>
        </LazyLoad>
        <LazyLoad height={380}>
          <Grid container style={{ height: 380 }}>
            <Title button="مشاهده همه" title="پرفروش های زنانه" />

            <Women />
          </Grid>
        </LazyLoad>
        <LazyLoad height={380}>
          <Grid container style={{ height: 380 }}>
            <Title button="مشاهده همه" title="پرفروش های بچگانه" />

            <Childish />
          </Grid>
        </LazyLoad>
        <LazyLoad height={450}>
          <Grid container style={{ height: 450 }}>
            <Title button="مشاهده همه" title="پرفروش های ایمنی" />

            <Safety />
          </Grid>
        </LazyLoad>
        </>
  );
}
