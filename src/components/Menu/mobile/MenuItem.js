import React from "react";
import useStyles from "./MenuItem.style";
import brandLogo from "../../../assets/images/brandLogo.png"
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ListItemButton } from "@mui/material";
import homeIcon from "../../../assets/images/home.png"
import productIcon from "../../../assets/images/browser.png"
import faqIcon from "../../../assets/images/faq.png"
import blogIcon from "../../../assets/images/blogging.png"
import contactIcon from "../../../assets/images/contact.png"
import profileIcon from "../../../assets/images/profile.png"

import { Link , useLocation } from "react-router-dom";

export default function MenuItem() {
  const classes = useStyles();
  const location=useLocation()
  const path=location.pathname
  return (
    <div className={classes.root}>
      <div className={classes.brandLogo} >
          <img   src={brandLogo} alt='shoes' className={classes.imageLogo}/>
      </div>
      <div className={classes.Drawer}>
<List>
    <ListItemButton className={classes.menuBtn} component={Link} to="/">
    <ListItemIcon >
      <img src={homeIcon} alt='shoesShop' className={classes.imageMenu}/>
    </ListItemIcon>
    <ListItemText>
      <Typography variant='body1' color={path==='/'?'#fff':'#959696'} className={classes.textAlign}> صفحه اصلی </Typography>
    </ListItemText>
    </ListItemButton>
    <ListItemButton className={classes.menuBtn} component={Link} to="/products">
    <ListItemIcon >
      <img src={productIcon} alt='shoesShop' className={classes.imageMenu}/>
    </ListItemIcon>
    <ListItemText>
      <Typography variant='body1' color={path==="/products"?'#fff':'#959696'} className={classes.textAlign}>محصولات </Typography>
    </ListItemText>
    </ListItemButton>

    <ListItemButton className={classes.menuBtn} component={Link} to="/faq">
    <ListItemIcon >
      <img src={faqIcon} alt='shoesShop' className={classes.imageMenu}/>
    </ListItemIcon>
    <ListItemText>
      <Typography variant='body1' color={path==="/faq"?'#fff':'#959696'} className={classes.textAlign}>سوالات پر تکرار </Typography>
    </ListItemText>
    </ListItemButton>
    
    <ListItemButton className={classes.menuBtn} component={Link} to="/blog">
    <ListItemIcon >
      <img src={ blogIcon} alt='shoesShop' className={classes.imageMenu}/>
    </ListItemIcon>
    <ListItemText>
      <Typography variant='body1' color={path==="/blog"?'#fff':'#959696'} className={classes.textAlign}>بلاگ </Typography>
    </ListItemText>
    </ListItemButton>
    
    <ListItemButton className={classes.menuBtn} component={Link} to= "/contact">
    <ListItemIcon >
      <img src={contactIcon} alt='shoesShop' className={classes.imageMenu}/>
    </ListItemIcon>
    <ListItemText>
      <Typography variant='body1' color={path=== "/contact"?'#fff':'#959696'} className={classes.textAlign}>تماس با ما </Typography>
    </ListItemText>
    </ListItemButton>
        
    <ListItemButton className={classes.menuBtn} >
    <ListItemIcon >
      <img src={profileIcon} alt='shoesShop' className={classes.imageMenu}/>
    </ListItemIcon>
    <ListItemText>
      <Typography variant='body1' color='#ff00008c' className={classes.textAlign}>ورود /ثبت نام </Typography>
    </ListItemText>
    </ListItemButton>
</List>
      </div>
    </div>
  );
}
