import React from "react";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./index.style";
import SearchIcon from "../../../assets/images/search.png";
import brandLogo from "../../../assets/images/brandLogo.png";
import { Button } from "@mui/material";
import Profile from "./Profile";
import ShopIcon from "./ShopIcon";



export default function Index() {
  const classes = useStyles();
  const location = useLocation();

  const path = location.pathname;
  return (
    <div className={classes.root}>
      <div className={classes.brandDiv}>
        <img src={brandLogo} alt="فروشگاه کفش" className={classes.brandImg} />
      </div>
      <div className={classes.menuDiv}>
        <div className={path === "/" ? classes.borderActiveMenu : null}>
          <Button
            className={path === "/" ? classes.activeMenu : classes.inactiveMenu}
            component={Link}
            to="/"
          >
            صفحه اصلی
          </Button>
        </div>
        <div className={path === "/products" ? classes.borderActiveMenu : null}>
          <Button
            className={
              path === "/products" ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/products"
          >
            محصولات
          </Button>
        </div>
        <div className={path === "/faq" ? classes.borderActiveMenu : null}>
          <Button
            className={
              path === "/faq" ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/faq"
          >
            سوالات پر تکرار
          </Button>
        </div>
        <div className={path === "/blog" ? classes.borderActiveMenu : null}>
          <Button
            className={
              path === "/blog" ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/blog"
          >
            بلاگ
          </Button>
        </div>
        <div className={path === "/contact" ? classes.borderActiveMenu : null}>
          <Button
            className={
              path === "/contact" ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/contact"
          >
            تماس با ما
          </Button>
        </div>
      </div>
      <Button component={Link} to="/search"><img src={SearchIcon} alt='' className={classes.SearchIcon}/></Button>

      <div className={classes.profileDiv}>
        <Profile />
        <ShopIcon />
      </div>
    </div>
  );
}
