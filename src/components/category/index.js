import React from "react";
import useStyles from "./indexStyles";
import S1 from "../../assets/images/s1.png";
import S4 from '../../assets/images/s4.png'
import S5 from '../../assets/images/s5.png'
import S6 from '../../assets/images/s6.png'


import { Button, Typography } from "@mui/material";
export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.ItemCat}>
        <img src={S1} alt="" className={classes.image} />
        <Typography variant="h6">کفش های مردانه</Typography>
        <div className={classes.btn}>
          <Button size='small' variant="text" color="warning">
            مشاهده همه
          </Button>
        </div>
      </div>
      <div className={classes.ItemCat}>
        <img src={S4} alt="" className={classes.image} />
        <Typography variant="h6">کفش های زنانه</Typography>
        <div className={classes.btn}>
          <Button size='small' variant="text" color="warning">
            مشاهده همه
          </Button>
        </div>
      </div>{" "}
      <div className={classes.ItemCat}>
        <img src={S5} alt="" className={classes.image} />
        <Typography variant="h6">کفش های بچگانه</Typography>
        <div className={classes.btn}>
          <Button size='small' variant="text" color="warning">
            مشاهده همه
          </Button>
        </div>
      </div>{" "}
      <div className={classes.ItemCat}>
        <img src={S6} alt="" className={classes.image} />
        <Typography variant="h6">کفش های ایمنی</Typography>
        <div className={classes.btn}>
          <Button size='small' variant="text" color="warning">
            مشاهده همه
          </Button>
        </div>
      </div>
    </div>
  );
}
