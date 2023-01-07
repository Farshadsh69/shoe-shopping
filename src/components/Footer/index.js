import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import useStyles from "./indexStyle";
import Title from "../TitleBottomBorder/index";

export default function Index() {

  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Container classes={{root:classes.container}} maxWidth="lg">
          <Grid item lg={4} xs={12} classes={{ root: classes.rootGrid }}>
            <Title title="  فروشگاه کفش" />
            <Typography variant="body2" className={classes.TextFooter}>
              تهران .میدان ونگ پاساژ ساعت طبقه دوم واحد 4
            </Typography>
            <Typography variant="body2" className={classes.TextFooter}>
              تلفن تماس:09121234567
            </Typography>
          </Grid>
          <Grid item lg={3} xs={12} className={classes.rootGrid}>
            <Title title=" ویزگی ها" />
            <Typography variant="body2" className={classes.TextFooter}>
              ارسال رایگان
            </Typography>
            <Typography variant="body2" className={classes.TextFooter}>
              {" "}
              امکان برگشت محصول تا هفت روز
            </Typography>
            <Typography variant="body2" className={classes.TextFooter}>
              {" "}
              کفش های برند های اصل
            </Typography>

            <Typography variant="body2" className={classes.TextFooter}>
              پایین ترین قیمت ها
            </Typography>
          </Grid>
          <Grid item lg={3} xs={12} className={classes.rootGrid}>
            <Title title="  برند ها" />
            <div className={classes.DivBtn}>
              <Button variant="text" color="info">
                آدیداس
              </Button>
              <Button variant="text" color="info">
                نایکی
              </Button>
              <Button variant="text" color="info">
                پوما
              </Button>
            </div>
          </Grid>
          <Grid item lg={2} xs={12} className={classes.rootGrid}>
            <Title title=" لینک هلی مفید " />
            <div className={classes.DivBtn}>
              <Button variant="text" color="info">
                سوالات پر تکرار
              </Button>
              <Button variant="text" color="info">
                بلاگ
              </Button>
              <Button variant="text" color="info">
                تماس با ما
              </Button>
            </div>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
