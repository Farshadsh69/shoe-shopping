import React from "react";
import { Hidden } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import useStyle from "./MasterLayout.style";
import DesktopMenu from "../components/Menu/desktop/index";
import MobileMenu from "../components/Menu/mobile/index";
import Footer from "../components/Footer/index";
import Modal from "../components/Modal";
import Route from "../routes/index";
export default function MasterLayout() {
  const classes = useStyle();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Hidden smDown>
          <DesktopMenu />
        </Hidden>
        <Hidden smUp>
          <MobileMenu />
        </Hidden>
        <Route />
        <Footer />
      </div>
      <Modal />
    </BrowserRouter>
  );
}
