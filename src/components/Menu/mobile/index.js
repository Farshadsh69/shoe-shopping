import React, { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useStyles from "./index.style";
import iconMenuM from "../../../assets/images/iconMenuM.png";
import brandLogo from "../../../assets/images/brandLogo.png";
import ShopIcon from "../desktop/ShopIcon";
import MenuItem from "./MenuItem";
import { Button } from "@mui/material";
import SearchIcon from "../../../assets/images/search.png";
import { Link } from "react-router-dom";



export default function Index() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <div onClick={toggleDrawer}>
        <img src={iconMenuM} alt="shoesShop" className={classes.IconMenuTop} />
      </div>
      <div className={classes.brandLogoDiv}>
        <img src={brandLogo} alt="shoesShop" className={classes.brandLogo} />
      </div>
      <Button component={Link} to="/search"><img src={SearchIcon} alt='' className={classes.SearchIcon}/></Button>

      <div className={classes.shopContent} >
        <ShopIcon />

      </div>
      <div >
        <SwipeableDrawer 
          open={open}
          onClose={toggleDrawer}
          classes={{paper:classes.drawer}}
        >
          <MenuItem />
        </SwipeableDrawer>
        </div>
    </div>
  );
}
